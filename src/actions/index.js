import { ADD_TOPIC } from "./style";

export const addTopic = (topic) => ({
    type: ADD_TOPIC,

    payload: topic
})