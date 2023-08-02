import React, { useState } from 'react';
import './update-delete.css';
import { useNavigate } from 'react-router-dom';


const RestorationUpdateDeletePage = () => {
    const navigate = useNavigate();

    const handleUpdateButtonClick = () => {
        navigate('/dashboard/res-update'); // Change '/update' to the path of your update page
    };



    return (
        <div className="res-update-delete">
            <div className='all-cards all-card-row-margin'>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        {/* Replace 'image-url.jpg' with the URL of the car image */}
                        <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>1987 MGB Roadster</h2>
                        <p>Price: $50,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                            notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete'  >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>Aston Martin DB5</h2>
                        <p>Price: $150,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                            automobile britannique Aston Martin.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete' >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-cards all-card-row-margin'>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        {/* Replace 'image-url.jpg' with the URL of the car image */}
                        <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>1987 MGB Roadster</h2>
                        <p>Price: $50,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                            notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete'  >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>Aston Martin DB5</h2>
                        <p>Price: $150,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                            automobile britannique Aston Martin.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete' >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-cards all-card-row-margin'>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        {/* Replace 'image-url.jpg' with the URL of the car image */}
                        <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>1987 MGB Roadster</h2>
                        <p>Price: $50,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                            notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete'  >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>Aston Martin DB5</h2>
                        <p>Price: $150,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                            automobile britannique Aston Martin.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete' >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-cards all-card-row-margin'>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        {/* Replace 'image-url.jpg' with the URL of the car image */}
                        <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>1987 MGB Roadster</h2>
                        <p>Price: $50,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                            notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete'  >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>Aston Martin DB5</h2>
                        <p>Price: $150,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                            automobile britannique Aston Martin.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete' >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='all-cards all-card-row-margin'>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        {/* Replace 'image-url.jpg' with the URL of the car image */}
                        <img src="/images/sale-card-4.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>1987 MGB Roadster</h2>
                        <p>Price: $50,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            Avec des années d'expérience dans l'industrie et une connaissance approfondie des voitures classiques,
                            notre équipe d'experts se consacre à vous guider à chaque étape du processus d'achat et de vente.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete'  >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
                <div className="card-sec card-sec-margin">
                    <div className="image-section">
                        <img src="/images/sale-card-3.jpg" alt="Car for sale" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="content-section">
                        <h2>Aston Martin DB5</h2>
                        <p>Price: $150,000</p>
                        <h4>DESCRIPTION</h4>
                        <p className='sale-card-des'>
                            L'Aston Martin DB5 est une voiture de grand tourisme de luxe légendaire produite par le constructeur
                            automobile britannique Aston Martin.
                        </p>
                        {/* <div className='btn-sale-card'><button className='sale-card-btn' >Apprendre Encore Plus</button></div> */}
                        <div className='delete-update-btn-container'>
                            <div className='btn-sale-card'><button className='sale-card-btn-delete' >Delete</button></div>
                            <div className='btn-sale-card'><button className='sale-card-btn-update' onClick={handleUpdateButtonClick} >Update</button></div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default RestorationUpdateDeletePage;
