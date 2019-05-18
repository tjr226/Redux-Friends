import Axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return Axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => {
            console.log(err);
        })
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getData = creds => dispatch => {
    // console.log("creds", creds)
    dispatch({ type: FETCH_FRIENDS_START })
    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log("response", res);
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FRIENDS_FAILURE })
        })
}

export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const postData = newFriend => dispatch => {
    dispatch({ type: ADD_FRIENDS_START })
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_FRIENDS_FAILURE })
        })
}

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteData = friendID => dispatch => {
    dispatch({ type: DELETE_FRIEND_START })
    axiosWithAuth().post(`http://localhost:5000/api/friends/${friendID}`)
        .then(res => {
            dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: DELETE_FRIEND_FAILURE })
        })
}