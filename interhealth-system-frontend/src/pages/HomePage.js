import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the InterHealth System</h1>
            <p>
                Please <Link to="/login">log in</Link> or <Link to="/register">register</Link> to access the system.
            </p>
            <p>
                InterHealth System allows hospitals in Rwanda to share patients' information using their names or generated IDs.
                The system keeps track of patients' information, past medication and treatments received, and doctor information with contacts.
                All medical staff must generate usernames and passwords to access the system.
            </p>
        </div>
    );
};

export default HomePage;

