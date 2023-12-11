
const { Sequelize,QueryTypes } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const sequelize = new Sequelize(process.env.DB_POSTGRES_DATABASE, process.env.DB_POSTGRES_USER, process.env.DB_POSTGRES_PASS, {
  host: process.env.DB_POSTGRES_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true', // Converta a string 'true' para um valor booleano
  },
});

module.exports = { sequelize, Sequelize, QueryTypes };
