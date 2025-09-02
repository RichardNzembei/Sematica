const mysql = require("mysql2/promise");

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME || "myapp",
    });
    console.log("MySQL Connected");
    return connection;
  } catch (err) {
    console.error("MySQL connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
