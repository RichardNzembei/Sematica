const { connectDB } = require('../config/db');

const createMenuTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS menu_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      business_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      category ENUM('starters', 'mains', 'drinks', 'desserts') NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      nutrition JSON,
      FOREIGN KEY (business_id) REFERENCES businesses(id)
    )
  `);
};

module.exports = { createMenuTable };