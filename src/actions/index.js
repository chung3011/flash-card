import { ADD_WORD, DEL_WORD, CLEAN_WORD, ADD_WORDS, UPDATE_STATUS, ADD_TOPIC, DEL_TOPIC, UPDATE_TOPIC, UPDATE_STATUS_WORD_TOPIC, INFO } from "./style";

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

export const addTopic = (box) => ({
    type: ADD_TOPIC,
    payload: box
})

export const delTopic = (box) => ({
    type: DEL_TOPIC,
    payload: box
})

export const updateTopic = (box) => ({
    type: UPDATE_TOPIC,
    payload: box
})

export const updateStatusWordTopic = (box) => ({
    type: UPDATE_STATUS_WORD_TOPIC,
    payload: box
})

export const addInfo = (info) => ({
    type: ADD_INFO,
    payload: info
})