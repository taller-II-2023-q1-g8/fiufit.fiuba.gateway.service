const express = require("express")
const router = express.Router()
const auth_middleware = require("../middleware/auth")
const checkAuth = auth_middleware.checkAuth
const user_controller = require("../controllers/users_controller")

//For creating an user
router.put('/', user_controller.creater_user)

//Get an usernames, optional prefix for matching
router.get('/usernames', user_controller.usernames_starting_with)

//Get an user
router.get('/', user_controller.find_user)

//Delete an user by username
router.delete('/:username', checkAuth, user_controller.delete_user)

//Update an user
router.post('/', checkAuth, user_controller.update_user)

module.exports = {router}