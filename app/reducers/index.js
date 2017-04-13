import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import activeUserReducer from './appstate'

const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer
})

export default allReducers