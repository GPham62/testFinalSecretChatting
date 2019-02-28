const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000
const URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-secret-chating'

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

mongoose.connect(URL, {useNewUrlParser: true}, () => {
    console.log(`Connect to mongodb server at ${URL}`)
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', require('./api_routes')(io))

// app.listen(PORT, () => {
//     console.log(`Listen on port ${PORT}`)
// })

io.on('connection', (socket) => {
    socket.on('subscribe', (room) => {
        console.log('Joing room' + room)
        socket.join(room)
    })
    socket.on('unsubscribe', (room) => {
        console.log('Leaving room' + room)
        socket.leave(room)
    })
    socket.on('send', (data) => {
        console.log('Sending messages...')
        io.sockets.in(data.room).emit('message', data)
    })
})

http.listen(PORT, ()=> {
    console.log('Listen at port' + PORT)
})

