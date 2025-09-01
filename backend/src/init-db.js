require('dotenv').config();
const { connectDB } = require('./config/db');
const { createUserTable } = require('./models/user');
const { createBusinessTable } = require('./models/business');
const { createProductTable } = require('./models/product');
const { createMenuTable } = require('./models/menu');
const { createAutomationTables } = require('./models/automation');
const { createPaymentGatewayTable } = require('./models/payment');
const { createDebugLogTable } = require('./models/debug');

const initDB = async () => {
  try {
    console.log('Environment variables:', {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
    await connectDB();
    await createUserTable();
    await createBusinessTable();
    await createProductTable();
    await createMenuTable();
    await createAutomationTables();
    await createPaymentGatewayTable();
    await createDebugLogTable();
    console.log('Database tables initialized');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

initDB();