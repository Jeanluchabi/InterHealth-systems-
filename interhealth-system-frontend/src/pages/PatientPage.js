import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PatientPage = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/patients/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                setPatient(response.data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPatient();
    }, [id]);

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{patient.name}</h1>
            <p>Patient ID: {patient.patientID}</p>
            <p>Medical History: {patient.medicalHistory.join(', ')}</p>
            <p>Treatments: {patient.treatments.join(', ')}</p>
            <p>Doctor: {patient.doctor.name}</p>
        </div>
    );
};

export default PatientPage;

