import consts from '../actionConstants'

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    connectedUsers: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case consts.ADD_NEW_USER:
            return {...state, currentUser: action.payload}
        case consts.auth.REMOVE_USER:
            return {...state, currentUser: null}
        case consts.chat.USERS_LIST_FETCHED:
            return {...state, connectedUsers: action.payload}
        default:
            return state
    }
}