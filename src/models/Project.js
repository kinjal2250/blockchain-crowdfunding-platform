const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    goal: { type: Number, required: true },
    raisedAmount: { type: Number, default: 0 },
    deadline: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
