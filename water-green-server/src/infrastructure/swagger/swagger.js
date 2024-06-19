const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My API Documentation',
      version: '1.0.0',
      description: 'Documentation for my REST API',
    },
    basePath: '/',
  },
  apis: ["../../routes/*.js"], // API rotalarının dosya yolunu belirtin
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
