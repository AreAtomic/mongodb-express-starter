const { userModel } = require('../../models')
const { authenticationValidation } = require('../../services/validation')

const signupValidation = async (req, res, next) => {
    const { username, firstName, lastName, email, password, type } = req.body

    try {
        await authenticationValidation.signup.emailValidation(email)
        authenticationValidation.signup.passwordValidation(password)
        authenticationValidation.signup.typeValidation(type)
        authenticationValidation.signup.nameValidation(
            username,
            firstName,
            lastName
        )

        next()
    } catch (error) {
        next(error)
    }
}

const getPasswordValidation = async (req, res, next) => {
    const { email } = req.body

    try {
        await authenticationValidation.login.emailValidation(email)
        next()
    } catch (error) {
        next(error)
    }
}

const loginValidation = async (req, res, next) => {
    const { userId } = req.params

    try {
        const user = await authenticationValidation.login.accountValidation(
            userId
        )

        req.user = user

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { signupValidation, getPasswordValidation, loginValidation }
