import consts from './actionConstants'
import axios from 'axios'

const apiURL = 'http://localhost:5000/api'

export const addNewUser = (user) => ({
    type: consts.ADD_NEW_USER,
    payload: user
})

export const newChatFetched = (chat) => ({
    type: consts.CHAT_FETCHED,
    payload: chat
})

export const chatsFetched = (chats) => ({
    type: consts.CHATS_FETCHED,
    payload: chats
})

export const joinedChatRoom = (chatid) => ({
    type: consts.JOINED_CHATROOM,
    payload: chatid
})

export const changeCurrentChatRoom = (chat) => ({
    type: consts.CHANGE_CURRENT_CHATROOM,
    payload: chat
})

export const messageFetched = (message) => ({
    type: consts.MESSAGE_FETCHED,
    payload: message
})

export const connectedToSocket = (socket) => ({
    type: consts.CONNECTED_TO_SOCKET,
    payload: socket
})

export const requestChatsOfUser = (userid) => (dispatch, getState) => {
    axios.get(apiURL+ `/chats/all?userid=${userid}`, userid)
        .then(chats => {
            console.log('chats fetched')
            dispatch(chatsFetched(chats.data))
        })

}
