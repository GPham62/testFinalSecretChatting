import consts from '../actionConstants'

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    connectedUserIds: null,
    connectedUsers: null
}

export default (state=initialState, action) => {
    let connectedUserIds, connectedUsers
    switch(action.type) {
        case consts.ADD_NEW_USER:
            return {...state, currentUser: action.payload}
        case consts.auth.REMOVE_USER:
            return {...state, currentUser: null}
        case consts.chat.USERS_LIST_FETCHED:
            connectedUserIds = []
            connectedUsers = {}
            action.payload.forEach(user => {
                connectedUserIds.push(user._id)
                connectedUsers[user._id] = user
            })
            return {...state, connectedUserIds, connectedUsers}
        default:
            return state
    }
}