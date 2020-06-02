const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    imgUrl: { type: String, default: "" }
});

module.exports = mongoose.model('Contact', contactSchema);