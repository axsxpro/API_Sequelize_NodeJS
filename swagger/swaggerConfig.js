const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0", // Version de l'OpenAPI
        info: {
            title: "Beer", // Titre de la documentation API
            version: "1.0.0", // Version de la documentation API
            description: "API documentation for Node.js application", // Description de la documentation API
        },
        components: {
            securitySchemes: {
                JwtAuth: { 
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                JwtAuth: [],
            },
        ],
    },
    apis: ["./src/Routes/*.js"], // Chemin vers les fichiers de routes contenant toutes les requêtes HTTP
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

