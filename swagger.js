const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Freetrader API',
        version: '1.0.0',
        description: 'This is a Swagger definition of the Freetrader API',
    }
}

const options = {
    swaggerDefinition,
    apis: ['app/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec