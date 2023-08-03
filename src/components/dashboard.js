import React,{useEffect} from 'react';
import { Route, Routes, Redirect } from 'react-router-dom'; // Replace Switch with Routes
import Header from './header';
import Sidebar from './sidebar';
import SearchFood from './searchfood';
import './dashboard.css';
import Add from './add';
import UpdateDeletePage from './update-delete';
import UpdateFormComponent from './update';
import RestorationAdd from './res-add';
import RestorationUpdateDeletePage from './res-update-delete';
import RestorationUpdate from './res-update';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (!token) {
          navigate('/');
        }
      }, []);


    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-content">
                <Sidebar />
                <div className="dashboard-main">
                    <Routes>
                        <Route path="/dashboard/welcome" element={
                            <>
                                <h1></h1>
                                <img
                                    src="https://drive.google.com/uc?export=view&id=1slvbHnVs88jYb2wyxOgUsN97VR-HzxFz"
                                    alt="Food Management System"
                                    className="dashboard-image"
                                />
                            </>
                        } />
                        <Route path="/dashboard/search-food" element={<SearchFood />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/update" element={<UpdateFormComponent />} />
                        <Route path="/update-delete" element={<UpdateDeletePage />} />
                        <Route path="/res-add" element={<RestorationAdd />} />
                        <Route path="/res-update-delete" element={<RestorationUpdateDeletePage />} />
                        <Route path="/res-update" element={<RestorationUpdate />} />
                        {/* <Route path="/dashboard/food-management" element={<FoodManagement />} />
                        <Route path="/dashboard/order-history" element={<OrderHistory />} />
                        <Route path="/dashboard/all-order-history" element={<AllOrderHistory />} />
                        <Route path="/dashboard/*" element={<Redirect to="/dashboard/welcome" />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
