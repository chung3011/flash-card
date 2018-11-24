import { DEL_WORD, ADD_WORD } from '../actions/style'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_WORD:
            return [...state,
            {
                word: action.payload.word,
                mean: action.payload.mean
            }
            ]
        case DEL_WORD:
            return state.filter(item => item.mean !== action.payload.mean)

        default:
            return state
    }
}