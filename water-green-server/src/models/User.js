const { DataTypes } = require("sequelize");
const sequelize = require("../infrastructure/sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user", "writer", "editor"),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    // options
  }
);

// Relationship with Article
User.associate = function(models) {
  User.hasMany(models.Articles, {
    foreignKey: 'userId',
    as: 'articles'
  });
};

module.exports = User;
