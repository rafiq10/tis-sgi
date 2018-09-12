
import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { authCheckState } from '../actions';

const initialState = {
  token: null,
  userTF: null,
  userName: null,
  error: null,
  isLoading: false,
  country: null,
}

const authStart = (state) =>{
  return updateObject(state, {error: null, isLoading: true})
}

const authSuccess = (state, action) =>{
  console.log(action)
  authStart(state)
  return updateObject(state, {
    token: action.token, 
    userTF: action.userTF, 
    userName: action.userName, 
    isLoading: false,
    country: action.country,
  })
}

const authFail = (state, action) =>{
  return updateObject(state, {error: action.error, isLoading: false})
}

const authLogout = (state, action) =>{
  return updateObject(state, {token: null, userTF: null});
}

const reducer = (state = initialState, action) =>{
  
  switch (action.type) {
    case actionsTypes.AUTH_START: return authStart(state,action)
    case actionsTypes.AUTH_FAIL: return authFail(state,action)
    case actionsTypes.AUTH_SUCCESS: return authSuccess(state,action)
    case actionsTypes.AUTH_LOGOUT: return authLogout(state, action)
    case actionsTypes.AUTH_CHECK_STATE: return authCheckState(state,action)
    default: return state;
  }
}
export default reducer;