const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['tutorial', 'news', 'other'],
        default: 'other',
    },
    text: {
        type: String,
        required: true,
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
})

module.exports = mongoose.model('article', articleSchema)
