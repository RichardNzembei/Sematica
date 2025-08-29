const { connectDB } = require('../config/db');
const { parseCSV } = require('../utils/csvParser');
const sharp = require('sharp');

const uploadCSV = async (req, res, next) => {
  try {
    const products = await parseCSV(req.file.path);
    const connection = await connectDB();
    for (const product of products) {
      await connection.execute(
        'INSERT INTO products (business_id, name, price, category, image_url, tags) VALUES (?, ?, ?, ?, ?, ?)',
        [req.user.id, product.name, product.price, product.category, product.image_url, JSON.stringify(product.tags || {})]
      );
    }
    res.json({ message: 'Products uploaded' });
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name, price, category, image_url, tags } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO products (business_id, name, price, category, image_url, tags) VALUES (?, ?, ?, ?, ?, ?)',
      [req.user.id, name, price, category, image_url, JSON.stringify(tags || {})]
    );
    res.status(201).json({ message: 'Product added' });
  } catch (error) {
    next(error);
  }
};

const syncProducts = async (req, res, next) => {
  try {
    // Placeholder for Shopify/WooCommerce sync
    res.json({ message: 'Products synced' });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadCSV, addProduct, syncProducts };