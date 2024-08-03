const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.development') });
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

// sequelize.import('../../models/user');

module.exports = sequelize;

//process.env. ile başlayan değerlerin önündeki sabit değerler undefined veriyor ama bunu önemseme.
