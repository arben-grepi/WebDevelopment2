const { Sequelize } = require("sequelize");
const config = require("../config/config.json")["development"];

// Initialize Sequelize with the MySQL config
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Export sequelize instance and Sequelize library
module.exports = { sequelize, Sequelize };
