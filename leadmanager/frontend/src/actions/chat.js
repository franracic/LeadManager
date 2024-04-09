import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './messages';

import { ADD_MESSAGE, GET_MESSAGES } from './types';

export const getMessages = () => (dispatch, getState) => {
    axios.get('/api/chat/', tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_MESSAGES,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addMessage = (msg) => (dispatch,getState) => {
    axios.post('/api/chat/',msg, tokenConfig(getState)).then(res => {
        dispatch({
            type: ADD_MESSAGE,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
