const { connectDB } = require('../config/db');
// Placeholder for Stripe/M-Pesa validation
const validatePayment = async (req, res, next) => {
  try {
    const { api_key, provider } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO payment_gateways (business_id, api_key, provider, is_valid) VALUES (?, ?, ?, ?)',
      [req.user.id, api_key, provider, true] // Mock validation
    );
    res.json({ message: 'Payment gateway validated' });
  } catch (error) {
    next(error);
  }
};

const createBusiness = async (req, res, next) => {
  try {
    const { name, logo_url, description, contact_info, category, restaurant_type, opening_hours, delivery_zones, branch_info } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO businesses (user_id, name, logo_url, description, contact_info, category, restaurant_type, opening_hours, delivery_zones, branch_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, name, logo_url, description, JSON.stringify(contact_info), category, restaurant_type || null, JSON.stringify(opening_hours || {}), JSON.stringify(delivery_zones || {}), JSON.stringify(branch_info || {})]
    );
    res.status(201).json({ message: 'Business created' });
  } catch (error) {
    next(error);
  }
};

const getBusiness = async (req, res, next) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM businesses WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBusiness, getBusiness, validatePayment };