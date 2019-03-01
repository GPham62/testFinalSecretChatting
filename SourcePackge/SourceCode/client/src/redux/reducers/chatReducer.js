import consts from '../actionConstants'

const initialState = {
    allChatIds: [],
    allChats: {},
    allUsers: {},
    allMessages: {},
    currentChatId: null,
    socket: null
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case consts.JOIN_CHATROOM: 
            return {...state, currentChat: action.payload}
        case consts.CONNECTED_TO_SOCKET:
            return {...state, socket: action.payload}
        case consts.CHATS_FETCHED:
            let allChatIds = []
            let allChats = {}
            action.payload.forEach(chat => {
                allChatIds.push(chat._id)
                allChats[chat._id] = chat
            })
            return {...state, allChatIds, allChats}
        case consts.CHANGE_CURRENT_CHATROOM:
            return {...state, currentChatId: action.payload}
        default:
            return state
    }
}
export default chatReducer