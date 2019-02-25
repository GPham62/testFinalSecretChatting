const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Interest = new Schema({
    name: {type: String, required: true, unique: true},
    users: [{type: Schema.Types.ObjectId, ref:'User'}]
})

module.exports = mongoose.model('Interest', Interest)