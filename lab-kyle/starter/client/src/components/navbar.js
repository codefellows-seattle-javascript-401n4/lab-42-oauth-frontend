import React from 'react';
import {renderIf} from '../lib/__';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.goToChat = this.goToChat.bind(this);
  }

  goToChat(){
    this.props.switchRoute('/chat');
  }

  render() {
    return (
      <nav>
        <ul>
          { /* TODO:  Need some dynamic links here for Logout, Profile, Chat to display only when you are logged in */ }
          {
            renderIf(this.props.auth,
              <React.Fragment>
                <li><button onClick={this.goToChat}>Chat</button></li>
                <li><button onClick={() => this.props.switchRoute('/profile')}>Profile</button></li>
                <li><button onClick={this.props.handleLogout}>Logout</button></li>
              </React.Fragment>
            )
          }
        </ul>
      /nav>
    )
  }
}

export default Navbar;
