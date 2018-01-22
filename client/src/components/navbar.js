import React from 'react';
import {renderIf} from '../lib/__'

class Navbar extends React.Component {

    constructor(props) {
        super(props)

    this.startChat = this.startChat.bind(this);

    }

    startChat() {
      this.props.switchRoute('/chat');        
    }
    
    render() {
        
        return (

            <nav>
                {renderIf(this.props.authentication, 
                    <ul>
                    <li><button onClick={this.startChat}>Chat</button></li>
                    <li><button onClick={ () => this.props.switchRoute('/profile') }>Profile</button></li>
                    <li><button onClick={this.props.handleLogout}>Logout</button></li>
                    </ul>
                )}
            </nav>

        )

    }

}

export default Navbar;