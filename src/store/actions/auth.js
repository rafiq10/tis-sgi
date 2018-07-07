import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
  return {
    type: actionTypes.AUTH_START
  }
}
export const authSuccess = (authData) =>{
  authStart();

  return {
    type: actionTypes.AUTH_SUCCESS, 
    token: authData.token, 
    userTF: authData.userTF, 
    userName: authData.userName, 
    isLoading: false}
  }

export const checkAuthTimeOut = (expiresIn) =>{
  return dispatch =>{
    setTimeout(()=>{
      dispatch(logout())
    }, expiresIn*1000 )
  }
} 

export const authFail = (error) =>{
  return{
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
  localStorage.removeItem('userName');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
export const auth = (data) =>{
  return dispatch => {
    const myData = {user: data.user, Password: data.password}
    return axios.post('http://10.102.192.12:5000/api/login',myData)
                  .then( res => {
                    console.log(res.data);
                    const token = res.data.token
                    const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                    localStorage.setItem('token', token);
                    localStorage.setItem('expiresIn', expirationDate)
                    localStorage.setItem('userName', res.data.userName)
                    localStorage.setItem('userTF', res.data.userTF)
                    dispatch(authSuccess(res.data));
                    dispatch(checkAuthTimeOut(res.data.expiresIn))
                  })
                  .catch(err => {
                    dispatch(authFail(err))
                  })
  }
}

export const authCheckState = () =>{
  return dispatch =>{
    const token = localStorage.getItem('token');
    if(!token){
      dispatch(logout())
    }else{
      const expiresIn = new Date(localStorage.getItem('expiresIn'));
      if (expiresIn > new Date()){
        const userTF = localStorage.getItem('userTF')
        const userName = localStorage.getItem('userName')
        dispatch(authSuccess({token,userTF,userName}));
      }else{
        dispatch(logout());
        dispatch(checkAuthTimeOut((expiresIn.getTime()-new Date().getTime())/1000 ))
      }

    }
  }
} 