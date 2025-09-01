const express = require('express');
const { createBusiness, getBusiness, validatePayment } = require('../controllers/business');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createBusiness);
router.get('/:id', protect, getBusiness);
router.post('/payment/validate', protect, validatePayment);

module.exports = router;