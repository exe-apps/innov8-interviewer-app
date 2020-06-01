const mongoose = require('mongoose');

const requirementSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    scores: { type: Array, default: [] }
});

module.exports = mongoose.model('Requirement', requirementSchema);