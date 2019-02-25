const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/users', require('./userRouter'))
apiRouter.use('/chats', require('./chatRouter'))

module.exports = apiRouter