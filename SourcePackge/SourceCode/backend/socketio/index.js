const chatController = require('../controller/chatController')

module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('join chat', (chatid) => {
            chatController
                .getSingleChat(chatid)
                .then(chat => {
                    if (!chat) socket.emit('err', {msg: 'No chat found!'})
                    else {
                        return chatController.getMessages(chatid, 20)
                    }
                })
                .then(messages => {
                    messages.forEach((message) => {
                        socket.emit('saved message', message)
                    })
                })
                .catch(error => {
                    socket.emit('err', {msg: 'Error on server. Please try again!'})
                })

        })
        socket.on('leave chat', (chatid) => {
            socket.leave(chatid)
        })
        socket.on('saving message', (data) => {
            const {author, body, chatid} = data
            chatController.createNewMessage({author, body, chatid})
                        .then(message => {
                            io.sockets.in(chatid).emit('saved message', data)
                        })
                        .catch(error => io.emit('err', {msg: 'Sent message failed. Please try again!'}))
        })
        socket.on('disconnect', () => {
            console.log('User is disconnected!')
        })
    })
}