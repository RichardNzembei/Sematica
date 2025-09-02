require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.locals.db = db;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});