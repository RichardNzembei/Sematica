const express = require('express');
const { createSupportTicket } = require('../controllers/support');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/tickets', protect, createSupportTicket);

module.exports = router;