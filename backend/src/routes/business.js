const express = require('express');
const { setupBusiness } = require('../controllers/business');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/setup', protect, setupBusiness);

module.exports = router;