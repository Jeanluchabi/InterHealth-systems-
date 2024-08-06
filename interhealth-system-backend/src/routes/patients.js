const express = require('express');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
const router = express.Router();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send('Access denied');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

router.use(authMiddleware);

router.post('/', async (req, res) => {
    try {
        const { name, medicalHistory, treatments, doctor } = req.body;
        const patientID = name.substring(0, 3).toUpperCase() + Math.floor(1000 + Math.random() * 9000);
        const patient = new Patient({ patientID, name, medicalHistory, treatments, doctor });
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const patient = await Patient.findOne({ patientID: req.params.id });
        if (!patient) return res.status(404).send('Patient not found');
        res.json(patient);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;

