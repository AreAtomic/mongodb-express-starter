const { userModel } = require('../../models')
const tokenServices = require('../../services/token')

exports.signup = async (req, res, next) => {
    const { username, firstName, lastName, email, password, type } = req.body

    try {
        const user = await userModel.create({
            email: email.toLowerCase(),
            password: password,
            username: username,
            firstName: firstName,
            lastName: lastName,
            type: type,
        })

        console.log(user)

        return res.status(200).json({ user: user })
    } catch (error) {
        next(error)
    }
}

exports.getUser = async (req, res, next) => {
    const { email } = req.body

    try {
        const user = await userModel.findOne({ email: email })

        return res.status(200).json({ user: user })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const { user } = req

    try {
        const token = tokenServices.generateToken(
            user._id,
            user.firstName,
            user.lastName,
            user.email
        )

        return res.status(200).json({ token: token })
    } catch (error) {
        next(error)
    }
}
