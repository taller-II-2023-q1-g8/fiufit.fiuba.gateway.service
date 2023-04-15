const axios = require("axios");
const url_users = process.env.URL_USERS;



async function create_user(data){
    var request_response = {}
    const url = 'https://fiufit-usuarios.onrender.com/user/';
    await axios.put(url, data)
        .then(response => {
            request_response.status = response.status
            request_response.message =  response.data
        })
        .catch(error => {
            request_response.status = error.response.status
            request_response.message = error.response.data
        });
    
    return request_response
}

async function find_by_username(username){
    var request_response = {}
    var url = url_users + username
    axios.get(url)
        .then(response => {
            request_response.status = response.status
            request_response.message = response.data
        })
        .catch(error => {
            //handleo
            request_response.status = error.response.status
            request_response.message = error.response.data
        });
    return request_response
}


module.exports = {create_user, find_by_username}