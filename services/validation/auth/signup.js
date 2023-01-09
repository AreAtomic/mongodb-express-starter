const { userModel } = require('../../../models')
const utils = require('../utils')

const emailValidation = async (email) => {
    if (!utils.isEmail(email)) {
        throw new Error('Email invalide', {
            cause: 'Veuillez rentrer un email valide',
        })
    }

    const user = await userModel.findOne({ email: email })
    if (user) {
        throw new Error("L'email est déjà utilisé.")
    }
}

const passwordValidation = (password) => {
    if (!utils.isPasswordHashed(password)) {
        throw new Error('Mot de passe invalide', {
            cause: 'Veuillez rentrer un mot de passe',
        })
    }
}

const typeValidation = (type) => {
    if (!utils.isEnumValid(type, ['admin', 'user', 'vendor', 'writer'])) {
        throw new Error('Type de compte invalide', {
            cause:
                'Veuillez choisir si vous êtes un client, un vendeur, un writer.',
        })
    }
}

const nameValidation = (username, firstName, lastName) => {
    if (!utils.isStringValid(username)) {
        throw new Error("Nom d'utilisateur invalide", {
            cause:
                "Veuillez entrer un nom d'utilisateur d'au moins 2 charactères",
        })
    }

    if (!utils.isStringValid(firstName)) {
        throw new Error('Prénom invalide', {
            cause: "Veuillez entrer un prénom d'au moins 2 charactères",
        })
    }

    if (!utils.isStringValid(lastName)) {
        throw new Error('Nom invalide', {
            cause: "Veuillez entrer un nom d'au moins 2 charactères",
        })
    }
}

module.exports = {
    emailValidation,
    passwordValidation,
    typeValidation,
    nameValidation,
}
