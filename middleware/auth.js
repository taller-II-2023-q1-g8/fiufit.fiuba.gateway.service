const admin = require('firebase-admin')
const serviceAccount = require("../fbkey.json");

var firestore_auth_URL = process.env.FIRESTORE_DATABASE_AUTH;
if (firestore_auth_URL == null){
    console.log("No URL found for FireStore Database in Env Vars, Authorization Module Halt.")
    process.exit(-1)
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firestore_auth_URL
});

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken)
      .then(() => {
        next()
      }).catch(() => {
        res.status(403).send('Invalid Credentials')
      });
  } else {
    res.status(403).send('No Login Token received')
  }
}



module.exports = {checkAuth}
