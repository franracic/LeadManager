import { ADD_MESSAGE, GET_MESSAGES } from '../actions/types.js';

const initialState = {
    chat: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_MESSAGES:
            return{
                ...state,
                chat: action.payload
            };
        case ADD_MESSAGE:
            return {
                ...state,
                chat: [...state.chat, action.payload]
            };
        default:
            return state;
    }
}