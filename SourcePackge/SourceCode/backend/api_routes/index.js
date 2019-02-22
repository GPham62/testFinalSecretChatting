const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/users', require('./userRouter'))
apiRouter.use('/chat', require('./userRouter'))

module.exports = apiRouter