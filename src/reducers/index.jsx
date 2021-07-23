import { combineReducers } from "redux";
export const LOGIN_REQUEST = 'LOGIN_REQUEST' 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' 

const initialState = {
  fname: "",
  lname: "",
  hobby: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  repassword: "",
  isLoggedIn: false,
};
export const authenticationReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    const newState = {...state, ...action.payload,isLoggedIn: true }
    return newState
  }
  return state
};
const rootReducer = combineReducers({
	authenticationReducer
});

export default rootReducer;