const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger yapılandırması
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Using swagger for API documentation',
      contact: {
        name: 'Alican',
      },
      servers: [
        {
          url: 'http://localhost:4000',
        },
      ],
    },
  },
  // API dokümantasyonunu oluşturmak için kullanılacak rotaların yeri
  apis: ['./routes/allRoutes.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };

// http://localhost:4000/api-docs bu adresten erişmelisin. 