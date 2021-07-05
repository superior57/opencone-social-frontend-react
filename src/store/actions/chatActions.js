import axios from "axios"
import { ADD_CHAT_USER, GET_CHAT_MESSAGES, GET_CONTACTS, GET_ERRORS, LOADING_CHAT, SEND_MESSAGE } from "./types";

const API = "/api/chat/";

export const addContact = (receiverId, history) => dispatch => {
    axios.put("/api/contacts/", {receiverId})
        .then(res => {
            dispatch({
                type: ADD_CHAT_USER,
                payload: res.data
            });
            history.push('/chat');
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getContacts = () => dispatch => {
    axios.get('/api/contacts/')
        .then(res => {
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getMessages = receiverId => dispatch => {
    console.log('getting messages');
    dispatch({
        type: LOADING_CHAT
    });
    axios.get(API + receiverId)
        .then(res => {
            dispatch({
                type: GET_CHAT_MESSAGES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const sendMessage = (receiverId, message) => dispatch => {
    axios.put(API + receiverId, {message})
        .then(res => {
            dispatch({
                type: SEND_MESSAGE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}