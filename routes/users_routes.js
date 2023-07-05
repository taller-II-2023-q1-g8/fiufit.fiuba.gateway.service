const express = require("express")
const router = express.Router()
//const auth_middleware = require("../middleware/auth")
//const checkAuth = auth_middleware.checkAuth
const axios = require('axios')

const { validateApiKey } = require("../middleware/api_key_validation.js");

let url_users = process.env.URL_USERS;

if (url_users == null){
    console.log("No URL found for Users Microservice in Environment Variables.")
    process.exit(-1)
}
router.all('*', async function(req, res) {
    const apiKey = req.header('Fiu-Fit-Auth');
    const isValidKey = await validateApiKey(apiKey);
    if (!isValidKey) {
        res.statusCode = 401;
        res.json({message: "Invalid API Key"});
        return;
    } else {
        let url = url_users + req.originalUrl
    let method = req.method
    console.log("[PROXY " + method + "]:", url)
    
    let axios_promise

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
    }
    
})

module.exports = {router}
