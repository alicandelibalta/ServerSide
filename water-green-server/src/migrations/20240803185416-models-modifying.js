"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Articles", "articleId", {
      allowNull: true, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "title", {
      allowNull: true, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "subtitle", {
      allowNull: true, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "content", {
      allowNull: true, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "id", {
      allowNull: true, // Sadece allowNull özelliğini değiştiriyoruz
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Articles", "articleId", {
      allowNull: false, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "title", {
      allowNull: false, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "subtitle", {
      allowNull: false, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "content", {
      allowNull: false, // Sadece allowNull özelliğini değiştiriyoruz
    });

    await queryInterface.changeColumn("Articles", "id", {
      allowNull: false, // Sadece allowNull özelliğini değiştiriyoruz
    });
  },
};
