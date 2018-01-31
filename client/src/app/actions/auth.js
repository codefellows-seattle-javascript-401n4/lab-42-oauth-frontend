/* global __API_URL__ */

// TODO: validate -- see if we have a token, fetch user from server using bearer, dispatch "LOGIN"
// TODO: Stretch goal is to re-impliment a basic auth login form
// TODO: logout -- remove the token cookie and dispatch "LOGOUT"
import superagent from 'superagent';
import cookie from 'react-cookies';

export const validate = () => dispatch => {
    let token = cookie.load('X-BBB-Token');
    console.log('actions, signing with google, token: ', token);
    if (token){
        superagent
        .get(`${__API_URL__}/user`)
        .set('Authorization', `Bearer ${token}`)
        .then(res=>{
            dispatch(loginAction(res.body))
        })
        .catch(console.error);
    }
}
export const login = (user)=> dispatch=>{
    dispatch(loginAction(user))
}
export const logout = () => dispatch=>{
    cookie.remove('X-BBB-Token');
    dispatch(logoutAction())
}

const validateAction =()=>({
    type: "LOGIN"
})
const loginAction =(user)=>({
    type:"LOGIN",
    payload:user
})
const logoutAction = (user)=>({
    type:"LOGOUT"
})