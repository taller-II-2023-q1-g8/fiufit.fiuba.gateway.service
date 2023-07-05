const express = require("express")
const router = express.Router()
//const auth_middleware = require("../middleware/auth")
//const checkAuth = auth_middleware.checkAuth
const axios = require('axios')

const { validateApiKey, serviceIsActive } = require("../middleware/api_key_validation.js");

const serviceName = 'Plans';
const url_plans = process.env.URL_PLANS;

if (url_plans == null){
    console.log("No URL found for Plans Microservice in Environment Variables.")
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
        const serviceActive = await serviceIsActive(serviceName);
        if (!serviceActive){
            res.statusCode = 407;
            res.json({message: "Plans service is currently unavailable."});
            return;
        } else {
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
            
        }
    }
})

module.exports = {router}