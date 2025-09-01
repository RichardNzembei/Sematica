const { connectDB } = require('../config/db');

const createBusinessTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS businesses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      app_type ENUM('E-Commerce', 'Restaurant') NOT NULL,
      business_name VARCHAR(255) NOT NULL UNIQUE,
      product_categories VARCHAR(255),
      store_type VARCHAR(255),
      cuisine_type VARCHAR(255),
      seating_capacity INT,
      delivery_option ENUM('yes', 'no'),
      business_email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      address VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);
};

module.exports = { createBusinessTable };