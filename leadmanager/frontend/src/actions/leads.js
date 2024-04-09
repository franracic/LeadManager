import axios from 'axios';
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

import { ADD_LEAD, CHANGE_LEAD, DELETE_LEAD, GET_LEADS } from './types';

export const getLeads = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteLead = (id) => (dispatch,getState) => {
    axios.delete('/api/leads/' + id + '/', tokenConfig(getState)).then(res => {
        dispatch(createMessage({ deleteLead: 'Lead Deleted'}));
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err => console.log(err));
};

export const addLead = (lead) => (dispatch,getState) => {
    axios.post('/api/leads/',lead, tokenConfig(getState)).then(res => {
        dispatch(createMessage({ deleteLead: 'Lead Added'}));
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const changeLead = (id, val) => (dispatch,getState) => {
    axios.patch('/api/leads/' + id + '/', {state:val}, tokenConfig(getState)).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    dispatch(createMessage({ deleteLead: 'Lead Changed'}));
    dispatch({
        type: CHANGE_LEAD,
        payload: [id, val]
    });
};