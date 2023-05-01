var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const user_route = require("./routes/users_routes")
const setupSwagger = require('./middleware/express-jsdoc-swagger');
const cors_options = {
  origin: "*"
}

var app = express();
const port = 3000;

setupSwagger(app);

app.use(logger('dev'));
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Routers
app.use('/user', user_route.router)

/**
 * GET /
 * @summary Documentación Ejemplo
 * @security basicAuth
 * @tags Microservicios
 * @return {object} 200 - Éxito
 * @return {object} 403 - Error
 * @example response - 200 - Éxito
 * [
 *   {
 *     "message": "Hello World!"
 *   }
 * ]
 */
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
    console.log(`Gateway listening on port ${port}`)
})

module.exports = app;
