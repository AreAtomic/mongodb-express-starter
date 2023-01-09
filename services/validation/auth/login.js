const { userModel } = require('../../../models')
const utils = require('../utils')

const emailValidation = async (email) => {
    if (!utils.isEmail(email)) {
        throw new Error('Email invalide', {
            cause: 'Veuillez rentrer un email valide',
        })
    }

    const user = await userModel.findOne({ email: email })
    if (!user) {
        throw new Error('Utilisateur introuvable')
    }
}

const accountValidation = async (id) => {
    const user = await userModel.findOne({ _id: id }, { password: 0 })

    if (!user) throw new Error('Utilisateur introuvable')

    return user
}

module.exports = {
    emailValidation,
    accountValidation,
}
