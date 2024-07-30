const express = require('express');
const { issuePolicy, claimPolicy } = require('../controllers/insuranceController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/issue', authenticate, issuePolicy);
router.post('/claim', authenticate, claimPolicy);

module.exports = router;
