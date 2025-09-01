const express = require('express');
const { getTraining } = require('../controllers/training');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/:category', protect, getTraining);

module.exports = router;