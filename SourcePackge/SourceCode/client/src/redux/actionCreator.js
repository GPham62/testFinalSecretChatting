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

export const messagesFetched = (data) => ({
    type: consts.MESSAGES_FETCHED,
    payload: data
})
export const joinedChatRoom = (chatid) => ({
    type: consts.JOINED_CHATROOM,
    payload: chatid
})

export const changeCurrentChatRoom = (chat) => ({
    type: consts.CHANGE_CURRENT_CHATROOM,
    payload: chat
})

export const messageFetched = (data) => ({
    type: consts.MESSAGE_FETCHED,
    payload: data
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

export const requestMessagesOfChat = (chatid, userid) => (dispatch, getState) => {
    axios
        .get(apiURL+`/chats/${chatid}/messages`)
        .then(results => {
            console.log('messages fetched', results)
            const {allChats, allMessages} = getState().chatReducer
            if (results.data.messages.length === 0) {
                console.log('No messages found')
                dispatch(messagesFetched({chatid, messages: [], allChats, allMessages}))
            } else {
                dispatch(messagesFetched({chatid, messages: results.data.messages, allChats, allMessages}))
            }
        })
        .catch(error => {
            console.log('Error', error)
        })

}

export const messageFetchedFunc = (message) => (dispatch, getState) => {
    const {allChats, allMessages, currentChatId} = getState().chatReducer
    console.log('Calling messageFetched action')
    dispatch(messageFetched({allChats, allMessages, currentChatId, message}))
}