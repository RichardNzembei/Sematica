const { connectDB } = require('../config/db');

const createDebugLogTable = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS debug_logs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      business_id INT NOT NULL,
      api_endpoint VARCHAR(255) NOT NULL,
      request JSON,
      response JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (business_id) REFERENCES businesses(id)
    )
  `);
};

module.exports = { createDebugLogTable };