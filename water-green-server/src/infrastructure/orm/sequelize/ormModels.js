const sequelize = require('../sequelize/sequelize'); // Path'i doğru olduğundan emin olun
const UserOrm = require('../sequelize/ormmodels/UserOrm');

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;
db.UserOrm = UserOrm;

module.exports = db;
