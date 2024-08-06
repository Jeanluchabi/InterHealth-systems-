const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    medicalHistory: [String],
    treatments: [String],
    doctor: {
        name: String,
        contact: String
    }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;

