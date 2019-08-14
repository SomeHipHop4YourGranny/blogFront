import { combineReducers } from 'redux'
import { userReducer } from './user/reducers'
import { postReducer } from './post/reducers'

const rootReducer = combineReducers({ userReducer, postReducer })

export default rootReducer
