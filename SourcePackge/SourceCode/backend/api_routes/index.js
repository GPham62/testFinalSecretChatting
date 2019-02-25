const express = require('express')
const session = require('express-session')
const apiRouter = express.Router()
const cors = require('cors')

apiRouter.use(cors());
apiRouter.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))
apiRouter.use('/users', require('./userRouter'))
apiRouter.use('/chats', require('./chatRouter'))
apiRouter.use('/auth', require('./authRouter'))

module.exports = apiRouter