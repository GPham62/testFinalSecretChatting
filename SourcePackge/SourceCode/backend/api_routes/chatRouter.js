const express = require('express')
const chatRouter = express.Router()

chatRouter.get('/', (req, res) => {
    res.send('Chat router welcome. Change this line')
})

module.exports = chatRouter