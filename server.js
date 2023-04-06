const express = require('express')
const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
//const admin = require('firebase-admin')
const {ROUTES} = require("./routes");



const app = express()
const port = 3000;

setupLogging(app);
setupProxies(app, ROUTES);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
