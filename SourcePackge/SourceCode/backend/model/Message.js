const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema({
    chatId: [{type: Schema.Types.ObjectId}],
    author: [{type: Schema.Types.ObjectId, ref: 'User'}],
    body: {type: Schema.Types.Mixed, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Message', Message)