const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    profile: {
        type: {
            birthday: {type: Date, required: true},
            gender: {type: String, required: true},
            address: {type: String},
            phone: {type: String},
            avatar: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}
        }
    },
    facebookProvider: {
        type: {
            id: String,
            token: String
        },
        select: false
    },
    interests: [{type: Schema.Types.ObjectId, ref: 'Interest'}]

}, {
    timestamps: true
})

module.exports = mongoose.model('user', User)