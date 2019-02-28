import consts from './actionConstants'
import axios from 'axios'

export const addNewUser = (user) => ({
    type: consts.ADD_NEW_USER,
    payload: user
})

export const newChatFetched = (chat) => ({
    type: consts.CHAT_FETCHED,
    payload: chat
})

export const joinChatRoom = (chatid) => ({
    type: consts.JOIN_CHATROOM,
    payload: chatid
})

export const messageFetched = (message) => ({
    type: consts.MESSAGE_FETCHED,
    payload: message
})

export const connectedToSocket = (socket) => ({
    type: consts.CONNECTED_TO_SOCKET,
    payload: socket
})