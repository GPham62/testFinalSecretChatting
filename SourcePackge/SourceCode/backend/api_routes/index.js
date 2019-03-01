const express = require('express')
const apiRouter = express.Router()



apiRouter.use('/users', require('./userRouter'))
apiRouter.use('/auth', require('./authRouter'))

module.exports = (io)=> {
    apiRouter.use('/chats', require('./chatRouter')(io))
    return apiRouter
}