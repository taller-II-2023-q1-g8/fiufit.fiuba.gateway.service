var express = require('express');
var path = require('path');
var logger = require('morgan');
const admin = require('firebase-admin')
const cors = require('cors');
const user_route = require("./presentation/users_api")
const cors_options = {
  origin: "*"
}


//const { createProxyMiddleware } = require('http-proxy-middleware');

const serviceAccount = require("./fbkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fiufit-18294.firebaseio.com"
});

var app = express();
const port = 3000;



app.use(logger('dev'));
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//Routers
app.use('/user', user_route.router)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
