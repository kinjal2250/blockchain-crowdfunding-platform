const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    policyDetails: { type: String, required: true },
    premium: { type: Number, required: true },
    coverageAmount: { type: Number, required: true },
    claimed: { type: Boolean, default: false },
    insured: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
