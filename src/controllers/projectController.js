const Project = require('../models/Project');
const { createProject, invest, withdrawFunds } = require('../services/blockchainService');

exports.createProject = async (req, res) => {
    const { title, description, goal, deadline } = req.body;
    try {
        const project = new Project({ title, description, goal, deadline, creator: req.user.id });
        await project.save();
        await createProject(title, description, goal, deadline, req.user.id);
        res.status(201).json({ message: 'Project created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.investInProject = async (req, res) => {
    const { projectId, amount } = req.body;
    try {
        await invest(projectId, amount, req.user.id);
        res.json({ message: 'Investment successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.withdrawFunds = async (req, res) => {
    const { projectId } = req.body;
    try {
        await withdrawFunds(projectId, req.user.id);
        res.json({ message: 'Funds withdrawn successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
