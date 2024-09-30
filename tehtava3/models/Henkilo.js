const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Define the Henkilo model using Sequelize
const Henkilo = sequelize.define(
  "Henkilo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    etunimi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sukunimi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kutsumanimi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    syntymavuosi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paino: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    kuvalinkki: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    laji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saavutukset: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "henkilot",
    timestamps: false, // Disable createdAt and updatedAt columns
  }
);

// Sequelize provides methods like findById, findAll, and save automatically
module.exports = Henkilo;
