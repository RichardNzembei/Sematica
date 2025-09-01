const express = require('express');
const { testCheckout, testMessage, testOrder, testReservation } = require('../controllers/test');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/checkout', protect, testCheckout);
router.post('/message', protect, testMessage);
router.post('/order', protect, testOrder);
router.post('/reservation', protect, testReservation);

module.exports = router;