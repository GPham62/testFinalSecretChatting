const express = require('express')
const session = require('express-session')
const apiRouter = express.Router()
apiRouter.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

module.exports = (io) => {
    // console.log(require('./chatRouter')(io))
    // console.log(require('./userRouter'))
    apiRouter.use('/users', require('./userRouter'))
    apiRouter.use('/chats', require('./chatRouter')(io))
    apiRouter.use('/auth', require('./authRouter'))
    return apiRouter
}

