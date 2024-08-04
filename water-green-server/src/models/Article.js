const { DataTypes } = require("sequelize");
const sequelize = require("../infrastructure/sequelize");

const Article = sequelize.define(
  "Article",
  {
    articleId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Automatically generate UUID
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.TEXT,
    },
    content: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.BLOB,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    id: {
      type: DataTypes.UUID,
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
