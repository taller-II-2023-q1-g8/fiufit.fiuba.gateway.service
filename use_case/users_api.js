import { Router } from "express"
const router = Router()
import { auth } from 'firebase-admin'

var url_users = process.env.URL_USERS;

if (url_users == null){
    console.log("No URL found for Users Microservice in Environment Variables. Using default URL.")
    url_users = 'https://fiufit-usuarios.onrender.com/user/'
}

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
router.get('/:username', checkAuth, (req, res) => {
    var url = url_users + req.params.username
    axios.get(url)
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
        auth().verifyIdToken(req.headers.authtoken)
            .then(() => {
                next()
            }).catch(() => {
            res.status(403).send('Unauthorized')
        });
    } else {
        res.status(403).send('Unauthorized2')
    }
}

//Delete an user by username
app.delete('/user/:username', checkAuth, (req, res) => {
    var url = url_users + req.params.username;
    axios.delete(url)
        .then(response => {
            res.statusCode = response.status;
            res.json({message: response.data})
        })
        .catch(error => {
            res.statusCode = error.response.status;
            res.json({message: error.response.data})
        });
})

//Update an user
app.post('/user', checkAuth, (req, res) => {
    axios.post(url_users, req.bidt)
    .then(response => {
        res.statusCode = response.status;
        res.json({message: response.data})
    })
    .catch(error => {
        res.statusCode = error.response.status;
        res.json({message: error.response.data})
    });
})

export default {router}