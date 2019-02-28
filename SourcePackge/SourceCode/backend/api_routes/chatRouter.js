const express = require('express')
const chatRouter = express.Router()

const Message = require('../model/Message')
const Chat = require('../model/Chat')
const User = require('../model/User')

const chatController = require('../controller/chatController')

module.exports = (io) => {
    chatRouter.get('/all', (req, res) => {
        // Get all chats
        chatController
            .getAllChatsOfUser(req.query.userid)
            .then(chats => {
                res.send(chats)
            })
            .catch(error => {
                res.status(500).send(error)
            })

        
    })
    chatRouter.post('/', (req, res) => {
        // Create new chat room
        const {name, users} = req.body
        const newChat = new Chat({name, users})
        newChat.save(function(error, result) {
            if (error) res.send({error})
            else res.send(result)
        })
    })
    chatRouter.get('/:chatid', (req, res) => {
        // Find chat information
        Chat.findOne({_id: req.query.chatid, users: req.body.userid})
            .then(chat => {
                if (!chat) res.send({error: 'Cannot find your chat!'})
                else {
                    res.send({chat})
                }
            })
            .catch(error => res.send({error}))
    })
    chatRouter.get('/:chatid/messages/all', (req, res) => {
        console.log(req.params.chatid)
        Message.find({chatid: req.params.chatid})
                .sort('-createdAt')
                .then(messages => {
                    res.send({messages})
                })
                .catch(error => res.send({error}))
    })
    chatRouter.post('/:chatid/messages/', (req, res) => {
        const {author, body} = req.body
        const {chatid} = req.params
        const newMessage = new Message({author, body, chatid})
        newMessage.save((error, message) => {
            if (error) res.send({error})
            else res.send({message})
        })
    
    })
    return chatRouter
}