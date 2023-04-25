const express = require("express")
const router = express.Router()
const auth_middleware = require("../middleware/auth")
const checkAuth = auth_middleware.checkAuth
const user_controller = require("../controllers/users_controller")
const axios = require('axios')

var url_users = process.env.URL_USERS;

if (url_users == null){
    console.log("No URL found for Users Microservice in Environment Variables. Using default URL.")
    url_users = 'https://fiufit-usuarios.onrender.com'
}
router.all('*', checkAuth, function(req, res) {
    url = url_users + req.originalUrl
    method = req.method
    console.log("[PROXY " + method + "]:", url)
    
    var axios_promise

    switch(method) {
        case "GET":
            axios_promise = axios.get(url, req.body)
            break
        case "POST":
            axios_promise = axios.post(url, req.body)
            break
        case "PUT":
            axios_promise = axios.put(url, req.body)
            break
        case "DELETE":
            axios_promise = axios.delete(url, req.body)
            break
    }
    
    axios_promise
    .then(response => {
        res.statusCode = response.status;
        res.json({message: response.data})
    })
    .catch(error => {
        res.statusCode = error.response.status;
        res.json({message: error.response.data})
    });
})

module.exports = {router}