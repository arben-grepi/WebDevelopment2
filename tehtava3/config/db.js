require("dotenv").config();
const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql", // specify the dialect you're using (MySQL in this case)
    pool: {
      max: 5, // maximum number of connections in pool
      min: 0, // minimum number of connections in pool
      acquire: 30000, // maximum time (in ms) to acquire a connection
      idle: 10000, // maximum idle time (in ms) before releasing a connection
    },
  }
);

// Test the connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDatabaseConnection();

module.exports = sequelize;
