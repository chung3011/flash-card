import { ADD_INFO } from "../actions/style";

export default function (state = { name: '', like: 0 }, action) {
    switch (action.type) {
        case ADD_INFO:
            return {
                name: action.payload.name,
                like: action.payload.like
            }
        default:
            return state
    }
}