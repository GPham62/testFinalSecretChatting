const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chat = Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'user'}],
    name: {type: String, required: true},
    description: {type: String},
    common_interests: [{type: Schema.Types.ObjectId, ref: 'interest'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Chat', Chat)