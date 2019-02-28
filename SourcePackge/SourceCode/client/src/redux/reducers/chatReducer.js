import consts from '../actionConstants'

const initialState = {
    allChats: [],
    currentChat: {},
    socket: null
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case consts.JOIN_CHATROOM: 
            return {...state, currentChat: action.payload}
        case consts.CHAT_FETCHED: 
            let allChats = state.allChats
            allChats.push(action.payload)
            return {...state, allChats}
        case consts.CONNECTED_TO_SOCKET:
            return {...state, socket: action.payload}
        default:
            return state
    }
}
export default chatReducer