const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chat = Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Chat', Chat)