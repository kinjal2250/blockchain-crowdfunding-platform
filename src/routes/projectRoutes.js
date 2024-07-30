const express = require('express');
const { createProject, getProjects, investInProject, withdrawFunds } = require('../controllers/projectController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authenticate, createProject);
router.get('/', getProjects);
router.post('/invest', authenticate, investInProject);
router.post('/withdraw', authenticate, withdrawFunds);

module.exports = router;
