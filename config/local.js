'use-strict'

let localConfig = {
    port: 5000,
    mongoURI:
        'mongodb+srv://[email]:[password]@[cluster]/[database]?retryWrites=true&w=majority',
    jwtSecret: 'yourstrongsecrettokenmustbechanged',
}

module.exports = localConfig
