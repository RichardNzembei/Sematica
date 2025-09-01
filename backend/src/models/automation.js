const { connectDB } = require('../config/db');

const createAutomationTables = async () => {
  const connection = await connectDB();
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS automation_templates (
      id INT AUTO_INCREMENT PRIMARY KEY,
      category ENUM('ecommerce', 'restaurant') NOT NULL,
      name VARCHAR(255) NOT NULL,
      config JSON
    )
  `);
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS automations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      business_id INT NOT NULL,
      template_id INT,
      config JSON,
      FOREIGN KEY (business_id) REFERENCES businesses(id),
      FOREIGN KEY (template_id) REFERENCES automation_templates(id)
    )
  `);
};

module.exports = { createAutomationTables };