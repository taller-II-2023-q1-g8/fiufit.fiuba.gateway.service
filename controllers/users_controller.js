const axios = require("axios")
var url_users = process.env.URL_USERS;

if (url_users == null){
    console.log("No URL found for Users Microservice in Environment Variables. Using default URL.")
    url_users = 'https://fiufit-usuarios.onrender.com/user/'
}


function creater_user(req, res) {
    axios.put(url_users, req.body)
    .then(response => {
        res.statusCode = response.status;
        res.json({message: response.data})
    })
    .catch(error => {
        res.statusCode = error.response.status;
        res.json({message: error.response.data})
    });
}

function find_by_username(req, res) {
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
}

function delete_user(req, res) {
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
}

function update_user(req, res) {
    axios.post(url_users, req.bidt)
        .then(response => {
            res.statusCode = response.status;
            res.json({message: response.data})
        })
        .catch(error => {
            res.statusCode = error.response.status;
            res.json({message: error.response.data})
        });
}

module.exports = {find_by_username, delete_user, update_user, creater_user}
