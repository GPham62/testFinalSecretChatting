const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 7000
const URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-secret-chating'
mongoose.connect(URL, {useNewUrlParser: true}, () => {
    console.log(`Connect to mongodb server at ${URL}`)
})

const apiRoutes = require('./api_routes')
const socketEvents = require('./socketEvents')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})

io.on('connection', (socket) => {
    console.log('an user connected!')
})
http.listen(5000, ()=> {
    console.log('Listen at port' + 5000)
})

