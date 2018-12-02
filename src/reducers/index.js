import { combineReducers } from 'redux'
import wordsReducer from './wordsReducer';
import boxReducer from './boxReducer';
import infoReducer from './infoReducer';


export default combineReducers({
    words: wordsReducer,
    box: boxReducer,
    info: infoReducer
})