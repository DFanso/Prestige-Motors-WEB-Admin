import React, { useState, useEffect } from 'react';
import './update.css';

const UpdateFormComponent = ({ initialData }) => {  // Receive initial data as props
    const [formData, setFormData] = useState({
        carName: '',
        smallDescription: '',
        largeDescription: '',
        transmission: '',
        mileage: '',
        interiorColor: '',
        exteriorColor: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                carName: initialData.carName || '',
                smallDescription: initialData.smallDescription || '',
                largeDescription: initialData.largeDescription || '',
                transmission: initialData.transmission || '',
                mileage: initialData.mileage || '',
                interiorColor: initialData.interiorColor || '',
                exteriorColor: initialData.exteriorColor || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Instead of clearing form after submit, use updated data to do something (e.g., make API request to update data on server)
        console.log(formData);
    };

    return (
        <div className='update'>
            <div className="add-container">
                <h1 className="add-form-heading">Update Sale cars</h1>
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
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateFormComponent;
