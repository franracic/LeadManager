import { ADD_LEAD, CHANGE_LEAD, DELETE_LEAD, GET_LEADS } from '../actions/types.js';

const initialState = {
    leads: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LEADS:
            return{
                ...state,
                leads: action.payload
            };
            case DELETE_LEAD:
                return {
                  ...state,
                  leads: state.leads.filter((lead) => lead.id !== action.payload)
                };
            case ADD_LEAD:
                return {
                  ...state,
                  leads: [...state.leads, action.payload]
                };
            case CHANGE_LEAD:
                return {
                  ...state,
                  leads: state.leads.map(
                    (lead) => lead.id === parseInt(action.payload[0]) ? {...lead, state: action.payload[1]}: lead
                )};
        default:
            return state;
    }
}