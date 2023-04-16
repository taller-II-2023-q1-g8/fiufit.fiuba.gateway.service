import { Router } from "express"
const router = Router()
import { checkAuth } from '../middleware/auth'
import * as user_controller from '../controllers/user_controller'

//For creating an user
router.put('/', checkAuth, user_controller.creater_user)

//Get an user by username
router.get('/:username', checkAuth, user_controller.find_by_username)

//Delete an user by username
app.delete('/user/:username', checkAuth, user_controller.delete_user)

//Update an user
app.post('/user', checkAuth, user_controller.update_user)

export default {router}