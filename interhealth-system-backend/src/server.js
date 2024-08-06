const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes');

dotenv.config();

const app = express();

app.use(express.json());

// Use patient routes
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


