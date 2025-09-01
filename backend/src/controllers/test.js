const { connectDB } = require('../config/db');

const testCheckout = async (req, res, next) => {
  try {
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO debug_logs (business_id, api_endpoint, request, response) VALUES (?, ?, ?, ?)',
      [req.user.id, '/api/test/checkout', JSON.stringify(req.body), JSON.stringify({ status: 'success' })]
    );
    res.json({ message: 'Test checkout completed' });
  } catch (error) {
    next(error);
  }
};

const testMessage = async (req, res, next) => {
  try {
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO debug_logs (business_id, api_endpoint, request, response) VALUES (?, ?, ?, ?)',
      [req.user.id, '/api/test/message', JSON.stringify(req.body), JSON.stringify({ status: 'success' })]
    );
    res.json({ message: 'Test message sent' });
  } catch (error) {
    next(error);
  }
};

const testOrder = async (req, res, next) => {
  try {
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO debug_logs (business_id, api_endpoint, request, response) VALUES (?, ?, ?, ?)',
      [req.user.id, '/api/test/order', JSON.stringify(req.body), JSON.stringify({ status: 'success' })]
    );
    res.json({ message: 'Test order placed' });
  } catch (error) {
    next(error);
  }
};

const testReservation = async (req, res, next) => {
  try {
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO debug_logs (business_id, api_endpoint, request, response) VALUES (?, ?, ?, ?)',
      [req.user.id, '/api/test/reservation', JSON.stringify(req.body), JSON.stringify({ status: 'success' })]
    );
    res.json({ message: 'Test reservation created' });
  } catch (error) {
    next(error);
  }
};

module.exports = { testCheckout, testMessage, testOrder, testReservation };