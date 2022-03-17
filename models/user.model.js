const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        example: 'aurelien@areatomic.com',
    },
    password: {
        type: String,
        required: true,
    },
    newPassword: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        enum: ['admin', 'user', 'vendor', 'writer'],
    },
})

module.exports = mongoose.model('user', userSchema)
