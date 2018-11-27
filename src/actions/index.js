import { ADD_WORD, DEL_WORD, CLEAN_WORD, ADD_WORDS, UPDATE_STATUS } from "./style";

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

export const addWords = (topic) => ({
    type: ADD_WORDS,
    payload: topic
})

export const updateStatus = (topic) => ({
    type: UPDATE_STATUS,
    payload: topic
})