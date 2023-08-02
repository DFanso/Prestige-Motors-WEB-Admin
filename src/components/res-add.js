import React, { useState } from 'react';
import './add.css';

const RestorationAdd = () => {
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
    const MAX_IMAGES = 4;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, e.g., submit it to a backend or store in state
        console.log(formData);
        // Clear the form fields after submission
        setFormData({
            carName: '',
            smallDescription: '',
            largeDescription: '',
            transmission: '',
            mileage: '',
            interiorColor: '',
            exteriorColor: '',
        });
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length + images.length <= MAX_IMAGES) {
            // Convert FileList to an array and store the images
            const imageArray = Array.from(files);
            setImages((prevImages) => [...prevImages, ...imageArray]);
        }
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className="res-add">
            <div className="add-container">
                <h1 className="add-form-heading">Add Restoration cars</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="carName"
                        placeholder="Car Name"
                        value={formData.carName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="smallDescription"
                        placeholder="Small Description"
                        value={formData.smallDescription}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="largeDescription"
                        placeholder="Large Description"
                        value={formData.largeDescription}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="transmission"
                        placeholder="Transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="mileage"
                        placeholder="Mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="interiorColor"
                        placeholder="Interior Color"
                        value={formData.interiorColor}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="exteriorColor"
                        placeholder="Exterior Color"
                        value={formData.exteriorColor}
                        onChange={handleChange}
                    />

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
                    <button type="submit">Add</button>
                </form>

            </div>
        </div>
    );
};

export default RestorationAdd;






