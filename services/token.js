const jwt = require('jsonwebtoken')
const config = require('config')
const secretToken = config.get('jwtSecret')

exports.generateToken = (id, firstName, lastName, username, email) => {
    return jwt.sign(
        {
            id: id,
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
        },
        secretToken,
        {
            expiresIn: '10d',
        }
    )
}
