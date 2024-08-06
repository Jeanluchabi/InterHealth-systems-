const express = require('express');
const router = express.Router();

// Dummy data for demonstration purposes
const patients = [
    {
        id: 1,
        name: 'John Luke',
        patientID: 'JL12345',
        medicalHistory: ['Allergy to penicillin', 'Asthma'],
        treatments: ['Inhaler', 'Antihistamines'],
        doctor: { name: 'Dr. Pumu' }
    }
    // Add more patients as needed
];

// Get patient by ID
router.get('/:id', (req, res) => {
    const patient = patients.find(p => p.id === parseInt(req.params.id));
    if (patient) {
        res.json(patient);
    } else {
        res.status(404).json({ message: 'Patient not found' });
    }
});

module.exports = router;

