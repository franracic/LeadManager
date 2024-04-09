import { GET_DATA } from '../actions/types.js';

const initialState = {
    data: {
        day: {date:[], newUsers:[], activeUsers:[],sessions:[]},
        traffic: {averageSessionDuration:[],activeUsers:[], week:[], sessionMedium:[]},
        country: {country:[], averageSessionDuration:[],activeUsers:[],sessions:[]},
        search: {week:[], organicGoogleSearchAveragePosition: [], organicGoogleSearchClickThroughRate:[], organicGoogleSearchClicks:[], organicGoogleSearchImpressions:[]}
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}