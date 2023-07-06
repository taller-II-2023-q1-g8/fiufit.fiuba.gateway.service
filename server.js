let express = require('express');
let path = require('path');
let logger = require('morgan');
const cors = require('cors');
const users_routes = require("./routes/users_routes")
const metrics_routes = require("./routes/goals_and_metrics_routes")
const messages_routes = require('./routes/messages_routes');
const goals_routes = require("./routes/goals_and_metrics_routes")
const plans_routes = require("./routes/plans_routes")
const services_routes = require("./routes/services_routes")
const setupSwagger = require('./middleware/express-jsdoc-swagger');
const cors_options = {
  origin: "*"
}

let app = express();
const port = 3000;

setupSwagger(app);

const dashboards = require('grafana-dashboards');


var dd_options = {
  'response_code':true,
  'tags': ['app:fiufit']
}
var connect_datadog = require('connect-datadog')(dd_options);
app.use(connect_datadog);


app.use(logger('dev'));
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Routers
app.use('/user', users_routes.router)
app.use('/messages', messages_routes.router)

app.use('/plans', plans_routes.router)
app.use('/exercises', plans_routes.router)
app.use('/multimedias', plans_routes.router)
app.use('/trainers', plans_routes.router)
app.use('/athletes', plans_routes.router)
app.use('/verifications', plans_routes.router)

app.use('/metrics', metrics_routes.router)
app.use('/goals', goals_routes.router)

app.use('/services', services_routes.router)


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

app.get('/grafana', (req, res) => {
  res.send(dashboards);
});

module.exports = app;
