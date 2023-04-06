const admin = require('firebase-admin')
const serviceAccount = require("./fbkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fiufit-18294.firestore.southamerica-east1.firebaseapp.com/"
});

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



const setupAuth = (app, routes) => {

    routes.forEach(r => {
        if (r.auth) {
            app.use(r.url, checkAuth(req, res, next), function (req, res, next) {
                next();
            });
        }
    });
}

exports.setupAuth = setupAuth
