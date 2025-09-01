const { connectDB } = require('../config/db');
const { parseCSV } = require('../utils/csvParser');
// Placeholder for AI OCR
const parsePDF = async (filePath) => {
  return [{ name: 'Mock Item', category: 'mains', price: 10.0, nutrition: {} }]; // Mock OCR
};

const uploadMenuCSV = async (req, res, next) => {
  try {
    const items = await parseCSV(req.file.path);
    const connection = await connectDB();
    for (const item of items) {
      await connection.execute(
        'INSERT INTO menu_items (business_id, name, category, price, nutrition) VALUES (?, ?, ?, ?, ?)',
        [req.user.id, item.name, item.category, item.price, JSON.stringify(item.nutrition || {})]
      );
    }
    res.json({ message: 'Menu uploaded' });
  } catch (error) {
    next(error);
  }
};

const uploadMenuPDF = async (req, res, next) => {
  try {
    const items = await parsePDF(req.file.path);
    const connection = await connectDB();
    for (const item of items) {
      await connection.execute(
        'INSERT INTO menu_items (business_id, name, category, price, nutrition) VALUES (?, ?, ?, ?, ?)',
        [req.user.id, item.name, item.category, item.price, JSON.stringify(item.nutrition || {})]
      );
    }
    res.json({ message: 'Menu uploaded from PDF' });
  } catch (error) {
    next(error);
  }
};

const addMenuItem = async (req, res, next) => {
  try {
    const { name, category, price, nutrition } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO menu_items (business_id, name, category, price, nutrition) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, name, category, price, JSON.stringify(nutrition || {})]
    );
    res.status(201).json({ message: 'Menu item added' });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadMenuCSV, uploadMenuPDF, addMenuItem };