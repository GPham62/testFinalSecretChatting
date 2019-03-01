const express = require('express')
const apiRouter = express.Router()
const cors = require('cors')


apiRouter.use(cors());
// apiRouter.use(session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false
// }))
apiRouter.use('/users', require('./userRouter'))
apiRouter.use('/auth', require('./authRouter'))

module.exports = (io)=> {
    apiRouter.use('/chats', require('./chatRouter')(io))
    return apiRouter
}