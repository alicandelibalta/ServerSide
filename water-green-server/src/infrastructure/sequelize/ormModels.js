const sequelize = require('./sequelize'); // Path'i doğru olduğundan emin olun
const UserOrm = require('../../models/user');
const ArticleOrm = require('../../models/article');

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;
db.UserOrm = UserOrm;
db.ArticleOrm = ArticleOrm;

module.exports = db;
