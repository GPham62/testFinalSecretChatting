    const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    profile: {
        type: {
            birthday: {type: Date, required: true},
            gender: {type: String, required: true},
            address: {type: String},
            phone: {type: String},
            avatar: {type: String, required: true}
        }
    },
    facebookProvider: {
        type: {
            id: String,
            token: String
        },
        select: false
    },
    interests: {type: Schema.Types.Mixed},
    chats: [{type: Schema.Types.ObjectId}]

}, {
    timestamps: true
})

module.exports = mongoose.model('user', User)