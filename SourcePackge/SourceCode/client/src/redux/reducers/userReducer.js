import consts from '../actionConstants'

const initialState = {
    currentUser: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case consts.ADD_NEW_USER:
            return {...state, currentUser: action.payload}
        default:
            return state
    }
}