const { connectDB } = require('../config/db');

const getTemplates = async (req, res, next) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM automation_templates WHERE category = ?', [req.params.category]);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

const createAutomation = async (req, res, next) => {
  try {
    const { template_id, config } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO automations (business_id, template_id, config) VALUES (?, ?, ?)',
      [req.user.id, template_id, JSON.stringify(config)]
    );
    res.status(201).json({ message: 'Automation created' });
  } catch (error) {
    next(error);
  }
};

const createReservationAutomation = async (req, res, next) => {
  try {
    // Placeholder for reservation automation
    res.json({ message: 'Reservation automation created' });
  } catch (error) {
    next(error);
  }
};

const createOrderAutomation = async (req, res, next) => {
  try {
    // Placeholder for order automation
    res.json({ message: 'Order automation created' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTemplates, createAutomation, createReservationAutomation, createOrderAutomation };