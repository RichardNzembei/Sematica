const { connectDB } = require('../config/db');

const createBusinessTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS businesses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      logo_url VARCHAR(255),
      description TEXT,
      contact_info JSON,
      category ENUM('ecommerce', 'restaurant') NOT NULL,
      payment_config JSON,
      social_links JSON,
      launch_ready BOOLEAN DEFAULT FALSE,
      restaurant_type VARCHAR(50),
      opening_hours JSON,
      delivery_zones JSON,
      branch_info JSON,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
};

module.exports = { createBusinessTable };