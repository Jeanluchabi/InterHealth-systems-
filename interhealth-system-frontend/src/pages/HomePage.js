import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to the InterHealth System</h1>
            <p>
                InterHealth System is designed to facilitate the seamless sharing of patient information among hospitals in Rwanda. Our platform ensures that healthcare providers can access crucial patient data, including medical history and treatments, to provide the best possible care.
            </p>
            <p>
                Please use the links below to navigate through the system:
            </p>
            <nav style={{ margin: '20px 0' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#007BFF' }}>
                            <h2>Login</h2>
                        </Link>
                        <p>Access your account to manage and view patient information.</p>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/register" style={{ textDecoration: 'none', color: '#007BFF' }}>
                            <h2>Register</h2>
                        </Link>
                        <p>Create a new account to join the InterHealth System network.</p>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/patients/1" style={{ textDecoration: 'none', color: '#007BFF' }}>
                            <h2>View Patient Information</h2>
                        </Link>
                        <p>Access detailed patient information, including medical history and treatments.</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;


