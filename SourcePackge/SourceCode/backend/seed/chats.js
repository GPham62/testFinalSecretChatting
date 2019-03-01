const mongoose = require('mongoose')
const Chat = require('../model/Chat')
const testMongoServer = 'mongodb://localhost:27017/api-secret-chating'
const chats = [
    {
        users: ['5c796852beea8c47904ff776', '5c796852beea8c47904ff778'],
        name: 'I felt so incredibly tired'
    },
    {
        users: ['5c796852beea8c47904ff77a', '5c796852beea8c47904ff778'],
        name: 'Alan Walker\'s fans'
    }
]

mongoose.connect(testMongoServer, {useNewUrlParser: true}, () => {
    console.log('Connected to mongo server at' + testMongoServer)
    Chat.create(chats, (err, results) => {
        if (err) console.log(err)
        else {
            console.log('Add chats successful!')
        }
    })
})
