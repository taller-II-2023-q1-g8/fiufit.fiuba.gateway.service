const users_dal = require("../data_access/users")

function create_user(data) {
    return users_dal.create_user(data)
}

function find_by_username(username){
    return users_dal.find_by_username(username)
}

module.exports = {create_user, find_by_username}