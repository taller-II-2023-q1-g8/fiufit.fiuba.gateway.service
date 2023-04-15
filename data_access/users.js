const axios = require("axios");
const url_users = process.env.URL_USERS;



function create_user(data){
    var request_response = {}
    const url = 'https://fiufit-usuarios.onrender.com/user/';
    axios.put(url, data)
        .then(response => {
            console.log(response.status)
            console.log(response.data)
            request_response.status = response.status
            request_response.message =  response.data
            return request_response
        })
        .catch(error => {
            //handleo
            console.log(error.response.status)
            console.log(error.response.data)
            request_response.status = error.response.status
            request_response.message = error.response.data
            return request_response
        });
    return 2
}

function find_by_username(username){
    var request_response = {}
    var url = url_users + username
    axios.get(url)
        .then(response => {
            request_response.status = response.status
            message: response.data
        })
        .catch(error => {
            //handleo
            request_response.status = error.response.status
            message: error.response.data
        });
    return request_response
}


module.exports = {create_user, find_by_username}