/* global __API_URL__ */

import superagent from 'superagent';
import cookie from 'react-cookies';

const loginAction = user => ({
  type: 'LOGIN',
  payload: user,
});

const logoutAction = () => ({
  type: 'LOGOUT',
});

export const validate = () => (dispatch) => {
  const token = cookie.load('X-BBB-Token');

  if (token) {
    superagent.get(`${__API_URL__}/user`)
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        dispatch(loginAction(response.body));
      })
      .catch(console.error);
  }
};

export const login = user => (dispatch) => {
  dispatch(loginAction(user));
};

export const logout = () => (dispatch) => {
  cookie.remove('X-BBB-Token');
  dispatch(logoutAction());
};
