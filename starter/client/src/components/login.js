// TODO: this should be the React-ified version of the simple index.html from last lab (#41)
// TODO: Stretch Goal: Show an actual signup/login form that interacts with the backend server.
import React from 'react';
import querystring from 'querystring';

class Login extends React.Component{
    render(){
        let googleURL = "https://accounts.google.com/o/oauth2/v2/oauth";
        let options = {
            client_id: __GOOGLE_CLIENT_ID__,
            redirect_uri:`${__API_URL__}/oauth/google/code`,
            scope: 'email openid profile',
            prompt: 'consent',
            response_type: 'code'
        }

        let QueryString = querystring.stringify(options);
        // Object.keys(options).map((key)=>{
        //     return `${key}=` + encodeURIComponent(options[key])
        // }).join("&")
        console.log(QueryString);
        let authURL = `${googleURL}?${QueryString}`;
       
        return(
            <React.Fragment>
                <a href = {authURL}>Log in with Google</a>
            </React.Fragment>
        )
    }
}
export default Login
