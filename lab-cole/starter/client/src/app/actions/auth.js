/* global __API_URL__ */
import superagent from 'superagent';
import cookie from 'react-cookies';

// TODO: validate -- see if we have a token, fetch user from server using bearer, dispatch "LOGIN"
export const validate = () => (dispatch) => {

  let token = cookie.load('X-BBB-Token');

  if ( token ) {
    superagent.get(`${__API_URL__}/user`)
      .set('Authorization', `Bearer ${token}`)
      .then( response => {
        dispatch(loginAction(response.body));
      })
      .catch(console.error);
  }
};

// TODO: login -- just dispatch "LOGIN".  Stretch goal is to re-impliment a basic auth login form
export const login = (user) => (dispatch) => {
  dispatch( loginAction(user) );
};

// TODO: logout -- remove the token cookie and dispatch "LOGOUT"
export const logout = () => (dispatch) => {
  cookie.remove('X-BBB-Token');
  dispatch( logoutAction() );
};

const loginAction = (user) => ({
  type: "LOGIN",
  payload: user
});

const logoutAction = (user) => ({
  type: "LOGOUT"
});