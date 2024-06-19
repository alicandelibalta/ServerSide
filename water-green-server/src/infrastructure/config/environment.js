'use strict';

const constants = require("./constants");

module.exports = (() => {

  const environment = {
    database: {
      // user: "postgres",
      // host: "localhost",
      // database: "wgDB",
      // password: "Lcarnitine11",
      // port: 5432,
      dialect: constants.SUPPORTED_DATABASE.POSTGRES,
      url: process.env.DATABASE_URI || '',
    }
  };

  if (process.env.NODE_ENV === 'test') {
    environment.database = {
      driver: constants.SUPPORTED_DATABASE.IN_MEMORY
    }
  }

  return environment;
})();
