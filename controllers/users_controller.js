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

function find_user(req, res) {
    console.log("find_user")
    if (req.query.username != null) {
        var url = url_users + "?username=" + req.query.username
    }
    else if (req.query.email != null) {
        var url = url_users + "?email=" + req.query.email
    }
    else {
        var url = url_users
    }

    console.log(url)

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

function usernames_starting_with(req, res) {
    console.log("usernames_starting_with")
    if (req.query.prefix != null) {
        var url = url_users + "usernames/?prefix=" + req.query.prefix
    }
    else {
        var url = url_users + "usernames/"
    }
    console.log(url)

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
    console.log("delete_user")
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
    console.log("update_user")
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

module.exports = {find_user, usernames_starting_with, delete_user, update_user, creater_user}
