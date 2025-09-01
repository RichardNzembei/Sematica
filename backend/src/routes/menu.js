const express = require('express');
const { uploadMenuCSV, uploadMenuPDF, addMenuItem } = require('../controllers/menu');
const { protect } = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/uploadCSV', protect, upload.single('file'), uploadMenuCSV);
router.post('/uploadPDF', protect, upload.single('file'), uploadMenuPDF);
router.post('/manual', protect, addMenuItem);

module.exports = router;