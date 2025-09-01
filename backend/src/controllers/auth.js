const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('../config/db');

const register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO users (first_name, last_name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone, password_hash]
    );
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT id, first_name, last_name, email, phone, role FROM users WHERE id = ?', [req.user.id]);
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getMe };