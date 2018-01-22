// TODO: Create a "Profile" component 
// TODO: Needs to bring in the users profile from state, let them change their username, and save to server + update app state

import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = this.props.profile || { username: '' };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillReceiveProps(props) {
  if(this.props.profile) { this.setState(this.props.profile) }
}

handleChange(e) {
  this.setState({[e.target.name]:(e.target.value)});  
}

handleSubmit(e) {
  e.preventDefault();
  this.props.updateProfile(this.state);
}

  render() {
    return (
      <form className="profile" onSubmit={this.handleSubmit}>			
      <label>
        <span>Change your Username</span>
        <input 
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
      </label>	
      </form>
    )
  }
}

