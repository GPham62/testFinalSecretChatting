import consts from '../actionConstants'

const initialState = {
    currentUser: null,
    isAuthenticated: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case consts.ADD_NEW_USER:
            return {...state, currentUser: action.payload}
        case consts.auth.REMOVE_USER:
            return {...state, currentUser: null}
        default:
            return state
    }
}