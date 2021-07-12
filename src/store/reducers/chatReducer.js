import { ADD_CHAT_USER, CREATE_SOCKET, DELETE_MESSAGE, GET_CHAT_MESSAGES, GET_CONTACTS, LOADING_CHAT, NEW_MESSAGE, SEND_MESSAGE } from "../actions/types";
import socketIOClient from 'socket.io-client';

const initialState = {
    contacts: [],
    contact: {},
    messages: [],
    loading: false,
    socket: null,
    newMessage: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_CHAT:
            return {
                ...state,
                loading: true
            }
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case GET_CHAT_MESSAGES: 
            return {
                ...state,
                messages: action.payload.messages,
                contact: action.payload.receiver,
                loading: false
            }
        case ADD_CHAT_USER:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                contact: action.payload.receiver
            }
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }    
        case CREATE_SOCKET:
            return {
                ...state,
                socket: socketIOClient()
            }
        case NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.payload
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(msg => msg._id !== action.payload)
            }
        default:
            return state;
    }
}