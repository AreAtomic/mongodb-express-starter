const express = require('express')
const router = express.Router()

const { authMiddlewares } = require('../middlewares')

const { authControllers } = require('../controllers')

router.post('/signup', authMiddlewares.signupValidation, authControllers.signup)
router.post('/', authMiddlewares.getPasswordValidation, authControllers.getUser)
router.get('/:userId', authMiddlewares.loginValidation, authControllers.login)

module.exports = router
