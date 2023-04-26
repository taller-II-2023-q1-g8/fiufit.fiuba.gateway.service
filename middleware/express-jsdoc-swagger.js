const expressJSDocSwagger = require('express-jsdoc-swagger');
//const path = require('path');

module.exports = function (app) {
    const options = {
        info: {
            title: 'Documentación Fiu-Fit API Gateway',
            version: '1.0.0',
            description: 'El Gateway redirige '
        },
        security: {
            basicAuth: {
                type: 'http',
                scheme: 'basic'
            }
        },
        //baseDir: path.resolve(__dirname, '../../'),
        //swaggerUi: path.join(__dirname, '../../docs/swagger-ui')
    };

    return expressJSDocSwagger(app)(options);
};