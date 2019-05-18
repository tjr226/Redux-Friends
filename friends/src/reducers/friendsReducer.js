import {
    LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE,
    FETCH_FRIENDS_FAILURE, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS,
    ADD_FRIENDS_SUCCESS, ADD_FRIENDS_FAILURE, ADD_FRIENDS_START
} from '../actions';


const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friendsList: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friendsList: action.payload
            }
        case ADD_FRIENDS_START:
            return {
                ...state
            }
        case ADD_FRIENDS_SUCCESS:
            return {
                ...state
            }
        default:
            return state;
    }
}