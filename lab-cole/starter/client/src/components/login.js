// TODO: this should be the React-ified version of the simple index.html from last lab (#41)
import React from 'react';
import querystring from 'querystring';

// TODO: Stretch Goal: Show an actual signup/login form that interacts with the backend server.
class Login extends React.Component {

  render() {

  let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";

	let options = {
		client_id:__GOOGLE_CLIENT_ID__,
		redirect_uri: `${__API_URL__}/oauth/google/code`,
		scope: 'email openid profile',
		prompt: 'consent',
		response_type: 'code'
	}

	let QueryString = querystring.stringify(options);

    return (
      <React.Fragment>
        <a href={`${googleURL}?${QueryString}`}>Click to log in using Google</a>
      </React.Fragment>
    )
  }
}

export default Login;