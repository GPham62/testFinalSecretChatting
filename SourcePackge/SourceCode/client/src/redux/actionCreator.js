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

export const removeUser = () => ({
    type: consts.auth.REMOVE_USER
})

export const userListFetched = (users) => ({
    type: consts.chat.USERS_LIST_FETCHED,
    payload: users
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

export const requestUserList = (currentUserId) => (dispatch, getState) => {
    axios
        .get(apiURL+`/users?except=${currentUserId}`)
        .then(result => {
            if (result.data) {
                const {users} = result.data
                dispatch(userListFetched(users))
            }
        })
        .catch(error => {
            console.log(error)
        })
}

export const verifyUserJwt = (token) => (dispatch, getState) => {
    axios  
        .post(apiURL+'/auth/verify', {token})
        .then(result => {
            console.log(result.data)
            if (result.data.user) {
                dispatch(addNewUser(result.data.user))
            }
        })
}

export const authenticateFacebook = (fbToken) => (dispatch, getState) => {
    axios
        .post(apiURL+`/auth/facebook?access_token=${fbToken}`)
        .then(result => {
            if (result.data.token) {
                const {token, user} = result.data
                localStorage.setItem('auth jwt', token)
                dispatch(addNewUser(user))
            }
        })
        .catch(error => {
            console.log(error)
        })
}

export const messageFetchedFunc = (message) => (dispatch, getState) => {
    const {allChats, allMessages} = getState().chatReducer
    console.log('Calling messageFetched action')
    dispatch(messageFetched({allChats, allMessages, message}))
}