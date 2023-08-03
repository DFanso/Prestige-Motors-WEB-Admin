import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook to handle navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim()) {
            alert("Username is required");
            return;
        }

        if (!password.trim()) {
            alert("Password is required");
            return;
        }

        // you would replace '/api/login' with your actual login API endpoint
        try {
            const response = await axios.post('https://api.prestigemotorsvence.com/api/auth/login', {
                username,
                password
            });

            // Check for the JWT token in the response
            if (response.data.token) {
                // Save JWT token to local storage
                localStorage.setItem('token', response.data.token);

                // Redirect to dashboard
                navigate('/dashboard'); 
            } else {
                // Handle error: show a message to the user
                alert("Login failed, please check your credentials and try again.");
            }

        } catch (error) {
            console.error("Error logging in", error);
            alert("An error occurred while trying to log you in.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-heading">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
