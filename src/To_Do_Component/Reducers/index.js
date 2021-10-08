import {combineReducers} from 'redux'
import todo from './todo'
//import pwd from './pwd'
const rootReducer=combineReducers({
    todo,
})

export default rootReducer;