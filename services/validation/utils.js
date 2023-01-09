const isEmail = (email) => {
    const charSchema = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    return email.match(charSchema)
}

const isStringValid = (value) => {
    return typeof value === 'string' && value.length >= 2
}

const isEnumValid = (type, allowed) => {
    const typeLowerCase = type.toString().toLowerCase()
    const allowedLowerCase = allowed.map((allow) => {
        return allow.toString().toLowerCase()
    })

    return allowedLowerCase.indexOf(typeLowerCase) !== -1
}

const isPasswordHashed = (password) => {
    const rounds = bcrypt.getRounds(password)
    return rounds === 10
}

module.exports = {
    isEmail,
    isStringValid,
    isEnumValid,
    isPasswordHashed,
}
