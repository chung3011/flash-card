import { ADD_WORD, DEL_WORD, CLEAN_WORD } from "./style";

export const addWord = (topic) => ({
    type: ADD_WORD,
    payload: topic
})

export const delWord = (item) => ({
    type: DEL_WORD,
    payload: item
})

export const cleanWord = (topic) => ({
    type: CLEAN_WORD,
    payload: topic
})