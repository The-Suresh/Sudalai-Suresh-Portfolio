const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // URL from Cloudinary
    techStack: [{ type: String }],
    githubLink: { type: String },
    liveLink: { type: String },
    category: { type: String, enum: ['Frontend', 'Backend', 'Fullstack', 'Blockchain', 'AI/ML', 'Other'], default: 'Other' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
