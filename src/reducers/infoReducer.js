import { ADD_INFO, CLEAN_INFO } from "../actions/style";

export default function (state = { name: '' }, action) {
    switch (action.type) {
        case ADD_INFO:
            return {
                name: action.payload.name,
            }
        case CLEAN_INFO:
            return []

        default:
            return state
    }
}