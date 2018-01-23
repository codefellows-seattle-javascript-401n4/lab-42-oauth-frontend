/* global __API_URL__ */

// TODO: validate -- see if we have a token, fetch user from server using bearer, dispatch "LOGIN"
// TODO: login -- just dispatch "LOGIN".  Stretch goal is to re-impliment a basic auth login form
// TODO: logout -- remove the token cookie and dispatch "LOGOUT"


import superagent from 'superagent';
import cookie from 'react-cookies';

export const validate = () => (dispatch) => {
  let token = cookie.load('X-BBB-Token');
  console.log('in the validate')
    if(token){
      console.log('token exists')
      superagent.get(`${__API_URL__}/user`)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        console.log('response from GET user is ', response.body)
          dispatch(loginAction(response.body));
      })
      .catch(console.error);
    };
}

export const login = (user) => (dispatch) => {
  console.log('user from login action is ', user)
  dispatch(loginAction(user));
}

export const logout = () => (dispatch) => {
  cookie.remove('X-BBB-Token');
  dispatch(logoutAction());
}

const loginAction = (user) => ({
  type: 'LOGIN',
  payload: user
})

const logoutAction = (user) => ({
  type: "LOGOUT"
})