const Message = require('../model/Message')
const Chat = require('../model/Chat')
const User = require('../model/User')

module.exports = {
    getAllChatsOfUser(userid) {
        return new Promise((resolve, reject) => {
            Chat.find({users: userid})   
                .populate({
                    path: 'users',
                    match: {_id: {$ne: userid}}
                })     
                .then(chats => {
                    resolve(chats)
                })
                .catch(error => reject(error))
        })
    },
    getSingleChat(chatid) {
        return new Promise((resolve, reject) => {
            Chat.findById(chatid)
                .then(chat => {
                    resolve(chat)
                })
                .catch(error => reject(error))
        })
    },
    createNewChat(chatdata) {
        return new Promise((resolve, reject) => {
            const newChat = new Chat(chatdata)
            newChat.save(function(error, result) {
                if (error) reject(error)
                else resolve(result)
            })
        })
    },
    createNewMessage({author, body, chatid}) {
        return new Promise((resolve, reject) => {
            const newMessage = new Message({author, body, chatid})
            newMessage.save((error, message) => {
                if (error) reject(error)
                else resolve(message)
            })
        })
    }, 
    getMessages (chatid, numOfMessages=10) {
        return new Promise((resolve, reject) => {
            Message.find({chatid})
                .sort('-createdAt')
                .limit(numOfMessages)
                .then(messages => {
                    resolve(messages)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}