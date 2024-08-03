const { DataTypes } = require("sequelize");
const sequelize = require("../infrastructure/sequelize");

const Article = sequelize.define(
  "Article",
  {
    articleId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.BLOB,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    // options
  }
);

// Relationship with User
Article.associate = function (models) {
  Article.belongsTo(models.Users, {
    foreignKey: "userId",
    as: "users",
  });
};

module.exports = Article;
