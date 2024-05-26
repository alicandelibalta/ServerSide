const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');


module.exports = function userOrm(){

    sequelize.define('user', {
  
        // attributes
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        // options
      });
    
};


  