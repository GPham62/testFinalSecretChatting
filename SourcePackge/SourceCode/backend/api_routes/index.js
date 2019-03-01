const express = require('express')
const apiRouter = express.Router()

// NEED TO EXPORT A FUNCTION TO INCLUDE SOCKET IO INSTANCE
module.exports = (io) => { 
    apiRouter.use('/users', require('./userRouter'))
    apiRouter.use('/auth', require('./authRouter'))
    apiRouter.use('/chats', require('./chatRouter')(io))
    return apiRouter
}