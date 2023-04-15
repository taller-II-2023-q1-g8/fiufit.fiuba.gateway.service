const app = require("../server");
const express = require("express")
const router = express.Router()
const users_business = require("../business/users")
const admin = require('firebase-admin')


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
//For creating an user
router.put('/', (req, res) => {
    const data = req.body;
    var users_response = users_business.create_user(data)
    console.log("JAJAJAJAJAJA" + users_response)
    res.statusCode = users_response.status;
    res.json({
        message: users_response.message
    })
})

//Get an user by username
router.get('/:username', checkAuth, (req, res) => {
    var users_response = users_business.find_by_username(req.params.username)

    res.statusCode = users_response.status;
    res.message = users_response.message
})
/*
//Delete an user by username
app.delete('/user/:username', checkAuth, (req, res) => {
    const url = url_users + req.params.username;
    console.log(url)
    axios.delete(url)
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

//Update an user
app.post('/user', checkAuth, (req, res) => {
    const data = req.body;

    axios.post(url_users, data)
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
*/

module.exports = {router}