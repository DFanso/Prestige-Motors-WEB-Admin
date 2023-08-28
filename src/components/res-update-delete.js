import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './update-delete.css';
import { useNavigate } from 'react-router-dom';



const RestorationUpdateDeletePage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const apiUrl = 'https://api.prestigemotorsvence.com/api/restoration';
     // replace with your API endpoint

     useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);



    const handleUpdateButtonClick = (id) => {
        navigate(`/dashboard/res-update/${id}`); // navigate to update page with id
    };

    const handleDeleteButtonClick = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            const token = localStorage.getItem('token'); // replace 'token' with your token key

            axios.delete(`${apiUrl}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                setData(data.filter(car => car._id !== id)); // remove deleted car from state
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    };


    return (
        <div className="res-update-delete">
            <div className='all-cards all-card-row-margin'>
                {data.map((car, index) => (
                    <div className="card-sec card-sec-margin" key={index}>
                        <div className="image-section">
                            <img src={car.pictures[0]} alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="content-section">
                            <h2>{car.carName}</h2>
                            <p>Mileage: {car.mileage}</p>
                            <h4>DESCRIPTION</h4>
                            <p className='sale-card-des'>
                                {car.smallDescription}
                            </p>
                            <div className='delete-update-btn-container'>
                                <div className='btn-sale-card'><button className='sale-card-btn-delete' onClick={() => handleDeleteButtonClick(car._id)}>Delete</button></div>
                                <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={() => handleUpdateButtonClick(car._id)}>Update</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default RestorationUpdateDeletePage;
