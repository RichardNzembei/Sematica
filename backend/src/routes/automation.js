const express = require('express');
const { getTemplates, createAutomation, createReservationAutomation, createOrderAutomation } = require('../controllers/automation');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/templates/:category', protect, getTemplates);
router.post('/', protect, createAutomation);
router.post('/reservations', protect, createReservationAutomation);
router.post('/orders', protect, createOrderAutomation);

module.exports = router;