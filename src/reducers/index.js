import { combineReducers } from 'redux'
import addTopicReducer from './addTopicReducer';


export default combineReducers({
    topic: addTopicReducer
})