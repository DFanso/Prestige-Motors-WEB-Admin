import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './update.css';
import { useNavigate } from 'react-router-dom';

const RestorationUpdate = () => {  // Receive initial data as props
    const navigate = useNavigate();
    const { id } = useParams();  // get the id from URL
    const apiUrl = `https://api.prestigemotorsvence.com/api/restoration/${id}`;  // replace with your API endpoint
    const token = localStorage.getItem('token');  // replace 'token' with your token key

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
        axios.get(apiUrl)
            .then(response => {
                setFormData(response.data);  // set the form data based on API response
            })
            .catch(error => {
                console.error('There was an error!', error);

            });
    }, [apiUrl, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(apiUrl, formData, {
            headers: {
                'Authorization': `Bearer ${token}`  // send token in the headers
            }
        })
            .then(response => {
                alert('Update Done');
                navigate(`/dashboard/res-update-delete`);
                console.log(response.data);  // handle successful update
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='res-update'>
            <div className="add-container">
                <h1 className="add-form-heading">Update Restoration cars</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="carName"
                        placeholder="Car Name"
                        value={formData.carName}
                        onChange={handleChange}
                    />
                    {/* <input
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
                    /> */}
                    <textarea
                        className='car-small-des-box'
                        name="smallDescription"
                        placeholder="Small Description"
                        value={formData.smallDescription}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        className='car-large-des-box'
                        name="largeDescription"
                        placeholder="Large Description"
                        value={formData.largeDescription}
                        onChange={handleChange}
                    ></textarea>
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

export default RestorationUpdate;
