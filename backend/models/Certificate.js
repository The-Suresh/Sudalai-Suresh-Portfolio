const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date },
    image: { type: String }, // Cloudinary URL
    link: { type: String }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
