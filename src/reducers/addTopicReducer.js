import { ADD_TOPIC } from '../actions/style'

const data = {
    title: 'animal',
    language: 'English',
    word: [
        {
            word: 'monkey',
            mean: 'con khỉ'
        },
        {
            word: 'bird',
            mean: 'con chim'
        },
        {
            word: 'fish',
            mean: 'con cá'
        },
    ]
}

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TOPIC:
            return {
                title: action.payload.title,
                language: action.payload.language,
                word: [
                    ...state,
                    {
                        word: action.payloaf.word,
                        mean: action.payload.mean
                    }
                ]
            }
        default:
            return state
    }
}