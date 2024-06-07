const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Beer',
      version: '1.0.0',
      description: 'API documentation for Node.js application',
    },
  },
  apis: ['./src/Routes/*.js'], // Chemin vers les fichiers de routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
