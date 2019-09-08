const router = require('express').Router()
const UserController = require('../controllers/user')
router.post('/register', UserController.createUser)
router.post('/loginForm', UserController.loginForm)
router.post('/loginGoogle', UserController.loginGoogle)

module.exports = router