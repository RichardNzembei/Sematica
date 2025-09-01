const { connectDB } = require('../config/db');

const createPaymentGatewayTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS payment_gateways (
      id INT AUTO_INCREMENT PRIMARY KEY,
      business_id INT NOT NULL,
      api_key VARCHAR(255) NOT NULL,
      provider ENUM('stripe', 'mpesa') NOT NULL,
      is_valid BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (business_id) REFERENCES businesses(id)
    )
  `);
};

module.exports = { createPaymentGatewayTable };