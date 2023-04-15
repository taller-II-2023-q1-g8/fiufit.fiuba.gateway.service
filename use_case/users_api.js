const app = require("../server");
const express = require("express")
const router = express.Router()
const admin = require('firebase-admin')

// var url_users = process.env.URL_USERS;

// if (url_users == null){
//     throw new Error("No URL found for Users Microservice")
// }

const url_users = 'https://fiufit-usuarios.onrender.com/user/'

//For creating an user
router.put('/', (req, res) => {
    axios.put(url_users, req.body)
        .then(response => {
            res.statusCode = response.status
            res.json({message: response.data})
        })
        .catch(error => {
            res.statusCode = error.response.status
            res.json({message: error.response.data})
        });
})

//Get an user by username
router.get('/:username', checkAuth, async (req, res) => {
    var url = url_users + req.params.username
    await axios.get(url)
        .then(response => {
            res.statusCode = response.status
            res.json({message: response.data})
        })
        .catch(error => {
            res.statusCode = error.response.status
            res.json({message: error.response.data})
        });
})


//app.use('/', checkAuth)
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

module.exports = {router}

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