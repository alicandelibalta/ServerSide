'use strict';

const constants = require("./constants");

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
module.exports = (() => {

  const environment = {
    database: {
      user: "postgres",
      host: "localhost",
      database: "wgDB",
      password: "Lcarnitine11",
      port: 5432,
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
