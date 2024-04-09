import axios from 'axios';
import { tokenConfig } from './auth';
import { returnErrors } from './messages';

import { GET_DATA } from './types';

export const getData = () => (dispatch, getState) => {
    axios.get('/api/data', tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_DATA,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};