const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('../config/db');

const register = async (req, res, next) => {
  console.log('Starting user registration with data:', {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
    country: req.body.country,
    password: '[REDACTED]',
  });
  try {
    const { first_name, last_name, email, phone, company, country, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      console.error('Registration failed: Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const password_hash = await bcrypt.hash(password, 10);
    const connection = await connectDB();
    await connection.execute(
      'INSERT INTO users (first_name, last_name, email, phone, company, country, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone || null, company || null, country || null, password_hash]
    );
    console.log('User registered successfully:', { email });
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    console.error('Registration failed:', error.message);
    if (error.code === 'ER_DUP_ENTRY' && error.message.includes('users.email')) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    next(error);
  }
};

const login = async (req, res, next) => {
  console.log('Starting login with data:', {
    email: req.body.email,
    password: '[REDACTED]',
  });
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.error('Login failed: Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      console.error('Login failed: Invalid credentials');
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log('Login successful:', { email });
    res.json({ token });
  } catch (error) {
    console.error('Login failed:', error.message);
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('SELECT id, first_name, last_name, email, phone, company, country, role FROM users WHERE id = ?', [req.user.id]);
    const user = rows[0];
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error('Fetch user failed:', error.message);
    next(error);
  }
};

module.exports = { register, login, getMe };