import {combineReducers} from 'redux'
import chatReducer from './chatReducer'
import userReducer from './userReducer'

export default combineReducers({chatReducer, userReducer})