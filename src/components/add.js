import React, { useState, useEffect } from 'react';
import './add.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';

const FormComponent = () => {

    const navigate = useNavigate();
    const MAX_IMAGES = 4;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, []);

    const [formData, setFormData] = useState({
        carName: '',
        smallDescription: '',
        largeDescription: '',
        transmission: '',
        mileage: '',
        interiorColor: '',
        exteriorColor: '',
    });

    const [images, setImages] = useState([]);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every((field) => field !== '');
        const mileageIsNumber = !isNaN(formData.mileage);
        const correctImageCount = images.length === MAX_IMAGES;
        setFormValid(allFieldsFilled && mileageIsNumber && correctImageCount);
    }, [formData, images]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mileage' && isNaN(value)) {
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formValid) {
            alert('Please fill all fields, enter a numeric value for mileage, and upload atleast 2 images.');
            return;
        }
        setLoading(true);

        let data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }
        images.forEach((image) => {
            data.append('photos', image);
        });
        try {
            const response = await axios.post('https://api.prestigemotorsvence.com/api/carForSale', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setLoading(false);
            alert('Adding completed successfully');
            console.log(response.data);
            setFormData({
                carName: '',
                smallDescription: '',
                largeDescription: '',
                transmission: '',
                mileage: '',
                interiorColor: '',
                exteriorColor: '',
            });
            setImages([]);
        } catch (error) {
            setLoading(false);
            console.error('There was an error!', error);
            alert('Operation failed');
        }
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length + images.length <= MAX_IMAGES) {
            const imageArray = Array.from(files);
            setImages((prevImages) => [...prevImages, ...imageArray]);
        }
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="add-container">
            {loading ? (
                <div className="loading-container">
                    <ReactLoading type={"spin"} color={"#000"} />
                </div>
            ) : (
                <>
                    <h1 className="add-form-heading">Add Sale cars</h1>
                    {
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="carName" placeholder="Car Name" value={formData.carName} onChange={handleChange} />
                            {/* <input type="text" className='car-des-height' name="smallDescription" placeholder="Small Description" value={formData.smallDescription} onChange={handleChange} /> */}
                            <textarea
                                className='car-small-des-box'
                                name="smallDescription"
                                placeholder="Small Description"
                                value={formData.smallDescription}
                                onChange={handleChange}
                            ></textarea>
                            {/* <input type="text" name="largeDescription" placeholder="Large Description" value={formData.largeDescription} onChange={handleChange} /> */}
                            <textarea
                                className='car-large-des-box'
                                name="largeDescription"
                                placeholder="Large Description"
                                value={formData.largeDescription}
                                onChange={handleChange}
                            ></textarea>
                            <input type="text" name="transmission" placeholder="Transmission" value={formData.transmission} onChange={handleChange} />
                            <input type="text" name="mileage" placeholder="Mileage" value={formData.mileage} onChange={handleChange} />
                            <input type="text" name="interiorColor" placeholder="Interior Color" value={formData.interiorColor} onChange={handleChange} />
                            <input type="text" name="exteriorColor" placeholder="Exterior Color" value={formData.exteriorColor} onChange={handleChange} />
                            <div className="image-preview-container">
                                {images.map((image, index) => (
                                    <div key={index} className="image-preview">
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                        <button onClick={() => handleRemoveImage(index)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                            {images.length < MAX_IMAGES && (
                                <div className="upload-button-container">
                                    <input type="file" id="image-upload" accept="image/*" multiple onChange={handleImageChange} />
                                    <label htmlFor="image-upload">Upload Image</label>
                                </div>
                            )}
                            <button type="submit" disabled={!formValid}>Add</button>
                        </form>}
                </>
            )}
        </div>
    );
};

export default FormComponent;
