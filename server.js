var express = require('express');
var path = require('path');
var logger = require('morgan');
const admin = require('firebase-admin')

const { createProxyMiddleware } = require('http-proxy-middleware');

const serviceAccount = require("./fbkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fiufit-18294.firebaseio.com"
});

var app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin.auth().verifyIdToken(req.headers.authtoken)
      .then(() => {
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized2')
  }
}

app.use('/', checkAuth)
//app.use('/', createProxyMiddleware({ target: 'http://www.google.com/', changeOrigin: true }))


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
