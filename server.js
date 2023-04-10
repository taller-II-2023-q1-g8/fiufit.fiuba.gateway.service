var express = require('express');
var path = require('path');
var logger = require('morgan');
const admin = require('firebase-admin')
const axios = require('axios');
const cors = require('cors');

const cors_options = {
  origin: "*"
}


const { createProxyMiddleware } = require('http-proxy-middleware');

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


//app.use('/', checkAuth)

app.put('/user', (req, res) => {
  const url = 'https://fiufit-usuarios.onrender.com/user/';
  const data = req.body;


  axios.put(url, data)
  .then(response => {
    //console.log(response);
    console.log(response.status);
    res.statusCode = response.status;
    res.json({
      message: response.data
    })
  })
  .catch(error => {
    //handleo

    console.log(error.response.status);
    res.statusCode = error.response.status;
    res.json({
      message: error.response.data
    })
  });

})


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
