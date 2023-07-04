const express = require("express")
const router = express.Router()
//const auth_middleware = require("../middleware/auth")
//const checkAuth = auth_middleware.checkAuth
const axios = require('axios')

const url_plans = process.env.URL_PLANS;

if (url_plans == null){
    console.log("No URL found for Plans Microservice in Environment Variables.")
    process.exit(-1)
}
router.all('*', function(req, res) {
    let url = url_plans + req.originalUrl
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
        case "PATCH":
            axios_promise = axios.patch(url, req.body)
            break
        case "DELETE":
            axios_promise = axios.delete(url, req.body)
            break
    }

    axios_promise
        .then(response => {
            res.statusCode = response.status;
            res.json(response.data)
        })
        .catch(error => {
            res.statusCode = error.response.status;
            res.json(error.response.data)
        });
})

module.exports = {router}