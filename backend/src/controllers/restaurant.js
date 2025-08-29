const { connectDB } = require('../config/db');

const createRestaurantProfile = async (req, res, next) => {
  try {
    const { restaurant_type, opening_hours, delivery_zones, branch_info } = req.body;
    const connection = await connectDB();
    await connection.execute(
      'UPDATE businesses SET restaurant_type = ?, opening_hours = ?, delivery_zones = ?, branch_info = ? WHERE user_id = ? AND category = "restaurant"',
      [restaurant_type, JSON.stringify(opening_hours), JSON.stringify(delivery_zones), JSON.stringify(branch_info), req.user.id]
    );
    res.json({ message: 'Restaurant profile updated' });
  } catch (error) {
    next(error);
  }
};

const getRestaurantProfile = async (req, res, next) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM businesses WHERE id = ? AND user_id = ? AND category = "restaurant"', [req.params.id, req.user.id]);
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { createRestaurantProfile, getRestaurantProfile };