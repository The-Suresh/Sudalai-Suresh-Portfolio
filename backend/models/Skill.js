const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Frontend', 'Backend', 'Testing', 'Tools', 'Database'], required: true },
    level: { type: Number, min: 1, max: 100 }, // Percentage for progress bar
    icon: { type: String } // URL or icon name
});

module.exports = mongoose.model('Skill', SkillSchema);
