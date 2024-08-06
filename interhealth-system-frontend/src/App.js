import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PatientPage from './pages/PatientPage';
import Navbar from './components/Navbar'; 
import reportWebVitals from './reportWebVitals';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Add Navbar */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
            </Routes>
        </Router>
    );
};

export default App;

