module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('enter chat', (chat) => {
            socket.join(chat)
        })
        socket.on('leave chat', (chat) => {
            socket.leave(chat)
        })
    })
}