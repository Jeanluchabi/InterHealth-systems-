const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
    try {
        const { name, patientID, medicalHistory, treatments, doctor } = req.body;
        const patient = new Patient({ name, patientID, medicalHistory, treatments, doctor });
        await patient.save();
        res.status(201).json({ message: 'Patient created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('doctor');
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

