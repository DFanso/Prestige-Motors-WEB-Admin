import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook to handle navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate login credentials
        // if valid, redirect to dashboard
        // history.push('/dashboard');
        navigate('/dashboard'); // Use navigate to redirect to the dashboard
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-heading">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='login-btn-admin'>
                        <button type="submit" className="btn btn-primary btn-block">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
