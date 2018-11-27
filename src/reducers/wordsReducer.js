import { DEL_WORD, ADD_WORD, CLEAN_WORD, ADD_WORDS, UPDATE_STATUS } from '../actions/style'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_WORD:
            return [
                {
                    word: action.payload.word,
                    mean: action.payload.mean,
                    status: action.payload.status
                },
                ...state
            ]
        case DEL_WORD:
            return state.filter(item => item.mean !== action.payload.mean)
        case CLEAN_WORD:
            return []
        case ADD_WORDS:
            return action.payload.words
        case UPDATE_STATUS:
            return state.map(item => item.word === action.payload.word
                ? {
                    word: item.word,
                    mean: item.mean,
                    status: !item.status
                } : item)

        default:
            return state
    }
}