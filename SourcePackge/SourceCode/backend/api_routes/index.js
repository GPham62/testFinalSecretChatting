const express = require('express')
const apiRouter = express.Router()

module.exports = (io) => {
    // console.log(require('./chatRouter')(io))
    // console.log(require('./userRouter'))
    apiRouter.use('/users', require('./userRouter'))
    apiRouter.use('/chats', require('./chatRouter')(io))
    return apiRouter
}