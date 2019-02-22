const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/users', userRouter)
apiRouter.use('/chat', chatRouter)

module.exports = apiRouter