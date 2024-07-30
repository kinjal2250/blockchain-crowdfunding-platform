const Insurance = require('../models/Insurance');
const { issuePolicy, claimPolicy } = require('../services/blockchainService');

exports.issuePolicy = async (req, res) => {
    const { policyDetails, premium, coverageAmount } = req.body;
    try {
        const policy = new Insurance({ policyDetails, premium, coverageAmount, insured: req.user.id });
        await policy.save();
        await issuePolicy(policyDetails, premium, coverageAmount, req.user.id);
        res.status(201).json({ message: 'Policy issued successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.claimPolicy = async (req, res) => {
    const { policyId } = req.body;
    try {
        await claimPolicy(policyId, req.user.id);
        res.json({ message: 'Policy claimed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
