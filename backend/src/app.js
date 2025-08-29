const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const businessRoutes = require('./routes/business');
const restaurantRoutes = require('./routes/restaurant');
const productRoutes = require('./routes/products');
const menuRoutes = require('./routes/menu');
const automationRoutes = require('./routes/automation');
const testRoutes = require('./routes/test');
const trainingRoutes = require('./routes/training');
const supportRoutes = require('./routes/support');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/products', productRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/automation', automationRoutes);
app.use('/api/test', testRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/support', supportRoutes);

app.use(errorHandler);

module.exports = app;