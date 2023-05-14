let express = require('express');
let path = require('path');
let logger = require('morgan');
const cors = require('cors');
const users_routes = require("./routes/users_routes")
const metrics_routes = require("./routes/goals_and_metrics_routes")
const goals_routes = require("./routes/goals_and_metrics_routes")
const setupSwagger = require('./middleware/express-jsdoc-swagger');
const cors_options = {
  origin: "*"
}

let app = express();
const port = 3000;

setupSwagger(app);

app.use(logger('dev'));
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Routers
app.use('/user', users_routes.router)
app.use('/metric', metrics_routes.router)
app.use('/goal', goals_routes.router)

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
