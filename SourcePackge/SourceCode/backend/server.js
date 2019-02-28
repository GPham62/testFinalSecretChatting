const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-secret-chating'

const socketEvents = require('./socketio')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

mongoose.connect(URL, {useNewUrlParser: true}, () => {
    console.log(`Connect to mongodb server at ${URL}`)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', require('./api_routes')(io))

socketEvents(io)

// app.listen(PORT, () => {
//     console.log(`Listen on port ${PORT}`)
// })


http.listen(PORT, ()=> {
    console.log('Listen at port' + PORT)
})

