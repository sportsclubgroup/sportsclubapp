import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';

  const initialState = {
    token: localStorage.getItem('token'), // token which is comes from localstorage if there is one set 
    isAuthenticated: null, 
    isLoading: false,
    isLoggedIn: false,
    user: null
  };

  export default function(state = initialState, action) {
    switch(action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED: // USER_LOADED run all the time with every request to see if we are logged in or not
        return {
          ...state,
          isAuthenticated: true, // auth is true because we went and validated on backend got the user ans set that true
          isLoading: false,// set false because user is now loaded
          
          user: action.payload // we send th user as the payload
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return {
          ...state,
          ...action.payload, // getting the token which is going to be included in the payload. action.payload going to have the user and token. 
          isAuthenticated: true, //Remember that's what we are sending back from the backend and then is authenticated true and loading is false
          isLoading: false,
          isLoggedIn:true
        };
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        alert("Successfully Registered")
        return {
          ...state,
          ...action.payload, // getting the token which is going to be included in the payload. action.payload going to have the user and token. 
          isAuthenticated: true, //Remember that's what we are sending back from the backend and then is authenticated true and loading is false
          isLoading: false,
  
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }