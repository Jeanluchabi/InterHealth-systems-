const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    patientID: { type: String, required: true, unique: true },
    medicalHistory: [String],
    treatments: [String],
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;

