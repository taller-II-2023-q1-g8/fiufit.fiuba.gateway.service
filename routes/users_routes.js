const express = require("express")
const router = express.Router()
const auth_middleware = require("../middleware/auth")
const checkAuth = auth_middleware.checkAuth
const user_controller = require("../controllers/users_controller")

//For creating an user
router.put('/', user_controller.creater_user)

//Get an user by username
router.get('/:username', checkAuth, user_controller.find_by_username)

//Delete an user by username
router.delete('/user/:username', checkAuth, user_controller.delete_user)

//Update an user
router.post('/user', checkAuth, user_controller.update_user)

module.exports = {router}