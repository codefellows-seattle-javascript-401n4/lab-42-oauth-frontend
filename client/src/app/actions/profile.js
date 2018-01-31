/* global __API_URL__ */

// TODO: update -- PUT the updated user to the server (with bearer) and dispatch an action to update state
import superagent from 'superagent';
import cookie from 'react-cookies';

export const updateProfile = (user)=>dispatch=>{
    dispatch(updateAction(user))
}

const updateAction = user => ({
    type:"UPDATE_PROFILE",
    payload:user
})