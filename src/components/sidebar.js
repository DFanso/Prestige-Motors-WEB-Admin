import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';



function Sidebar({ onWelcomeClick }) {
    const shouldUpdateLinkBeDisabled = true; // Set this based on your conditions

    useEffect(() => {
        // Simulate click on the first NavLink when the component mounts
        document.querySelector('.my-link').click();
    }, []);
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <img src="/images/logo-final-crop.png" alt="Logo" />
            </div>
            <ul>
                <hr />
                <h3 className="sale-admin-heading">Sale page</h3>
                <hr />
                <li>
                    <NavLink to="/dashboard/add" exact className='my-link' activeClassName="active">
                        Add
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/update-delete" className='my-link' activeClassName="active">
                        Car Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/update" activeClassName="active">

                    </NavLink>
                </li>

                <hr />
                <h3 className="res-admin-heading">Restauration page</h3>
                <hr />
                <li>
                    <NavLink to="/dashboard/res-add" className='my-link' activeClassName="active">
                        Add
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/res-update-delete" className='my-link' activeClassName="active">
                        Car Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/res-update" activeClassName="active">

                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
