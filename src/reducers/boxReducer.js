import {
    ADD_TOPIC, DEL_TOPIC, UPDATE_TOPIC,
    UPDATE_STATUS_WORD_TOPIC, UPDATE_LIKE_ALL_BOX,
    CLEAN_ALL_TOPIC, ADD_ALL_TOPIC,
}
    from "../actions/style";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TOPIC:
            return [{
                language: action.payload.language,
                title: action.payload.title,
                words: action.payload.words,
                point: 0,
                learn: 0,
                auth: true,
                date: Date.now(),
                userUid: action.payload.userUid,
                dateUserAuth: action.payload.dateUserAuth
            }, ...state]
        case UPDATE_TOPIC:
            return state.map(item => item.date == action.payload.date
                ? {
                    language: item.language,
                    title: item.title,
                    point: item.point,
                    learn: item.learn,
                    auth: item.auth,
                    date: item.date,
                    userUid: item.userUid,
                    words: action.payload.words
                } : item)
        case UPDATE_STATUS_WORD_TOPIC:
            return state.map(item => item.date == action.payload.date
                ? {
                    language: item.language,
                    title: item.title,
                    point: item.point,
                    learn: item.learn,
                    auth: item.auth,
                    date: item.date,
                    userUid: item.userUid,
                    words: item.words.map(value => value.word == action.payload.word
                        ? {
                            word: value.word,
                            mean: value.mean,
                            status: action.payload.status
                        }
                        : value)
                } : item)
        case UPDATE_LIKE_ALL_BOX:
            return state.map(item => item.date == action.payload.date
                ? {
                    like: action.payload.like,
                    language: item.language,
                    title: item.title,
                    point: item.point,
                    learn: item.learn,
                    auth: item.auth,
                    date: item.date,
                    userUid: item.userUid,
                    words: item.words
                }
                : item)
        case ADD_ALL_TOPIC:
            return action.payload.box

        case DEL_TOPIC:
            return state.filter(item => item.date !== action.payload.date)

        case CLEAN_ALL_TOPIC:
            return []

        default:
            return state
    }

}