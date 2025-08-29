const fs = require('fs').promises;

const parseCSV = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf-8');
  const rows = content.split('\n').slice(1); // Skip header
  return rows.map(row => {
    const [name, price, category, image_url] = row.split(',');
    return { name, price: parseFloat(price), category, image_url };
  });
};

module.exports = { parseCSV };