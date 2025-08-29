const { connectDB } = require('../config/db');

const createProductTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      business_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      category VARCHAR(100),
      image_url VARCHAR(255),
      tags JSON,
      FOREIGN KEY (business_id) REFERENCES businesses(id)
    )
  `);
};

module.exports = { createProductTable };