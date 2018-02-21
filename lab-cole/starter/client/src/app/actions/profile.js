/* global __API_URL__ */
import superagent from 'superagent';
import cookie from 'react-cookies';

// TODO: update -- PUT the updated user to the server (with bearer) and dispatch an action to update state
export const update = (user) => (dispatch) => {

  let token = cookie.load('X-BBB-Token');

  if ( token ) {

    superagent.put( `${__API_URL__}/user`)
      .set('Authorization', `Bearer ${token}`)
      .send(user)
      .then(response => {
          dispatch( updateAction(response.body) );
      })
      .catch(console.error);
  }
};

const updateAction = (user) => ({
  type: "UPDATE_PROFILE",
  payload: user
});