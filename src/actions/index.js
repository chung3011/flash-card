import { ADD_WORD, DEL_WORD } from "./style";

export const addWord = (topic) => ({
    type: ADD_WORD,
    payload: topic
})

export const delWord = (item) => ({
    type: DEL_WORD,
    payload: item
})