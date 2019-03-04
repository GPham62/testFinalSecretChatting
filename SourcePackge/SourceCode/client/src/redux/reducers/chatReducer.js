import consts from '../actionConstants'

const initialState = {
    allChatIds: null,
    allChats: {},
    allUsers: {},
    allMessages: {},
    currentChatId: null,
    socket: null
}

const chatReducer = (state = initialState, action) => {
    let allChats, allMessages, currentChatId
    switch(action.type) {
        case consts.JOIN_CHATROOM: 
            return {...state, currentChat: action.payload}
        case consts.CONNECTED_TO_SOCKET:
            return {...state, socket: action.payload}
        case consts.CHATS_FETCHED:
            let allChatIds = []
            allChats = {}
            action.payload.forEach(chat => {
                allChatIds.push(chat._id)
                allChats[chat._id] = chat
            })
            return {...state, allChatIds, allChats}
        case consts.CHANGE_CURRENT_CHATROOM:
            return {...state, currentChatId: action.payload}
        case consts.MESSAGES_FETCHED:
            allChats = action.payload.allChats
            allMessages = action.payload.allMessages

            allChats[action.payload.chatid].messages = []
            action.payload.messages.forEach(message => {
                const id = message._id
                allChats[action.payload.chatid].messages.unshift(id) // Unshift because messages on server is sorted 
                allMessages[id] = message
            })
            return {...state, allChats, allMessages}
        case consts.MESSAGE_FETCHED: 
            allChats = action.payload.allChats
            allMessages = action.payload.allMessages
            let message = action.payload.message
            
            console.log('message fetched ', message)
            allChats[message.chatid].messages.push(message._id)
            allMessages[message._id] = message
            return {...state, allChats, allMessages}
        default:
            return state
    }
}
export default chatReducer