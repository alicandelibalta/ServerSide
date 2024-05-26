// database.js
const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

// const sequelize = new Sequelize('database_name', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false, // İsteğe bağlı: SQL sorgularının konsolda görünmesini istemiyorsanız false yapın
// });

sequelize.import('./ormmodels/UserOrm');

module.exports = sequelize;
