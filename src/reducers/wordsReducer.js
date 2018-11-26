import { DEL_WORD, ADD_WORD, CLEAN_WORD } from '../actions/style'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_WORD:
            return [
                {
                    word: action.payload.word,
                    mean: action.payload.mean
                },
                ...state
            ]
        case DEL_WORD:
            return state.filter(item => item.mean !== action.payload.mean)
        case CLEAN_WORD:
            return []

        default:
            return state
    }
}