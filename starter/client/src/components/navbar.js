import React from 'react';
import {renderIf} from '../lib/__';

class Navbar extends React.Component {
    
    render() {
        
        return (

            <nav>
                <ul>{
                    renderIf(this.props.auth,
                    <React.Fragment>
                        <li><button onClick={()=> this.props.swithRoute('/chat')}>Chat</button></li>
                        <li><button onClick={()=> this.props.swithRoute('/profile')}>Profile</button></li>
                        <li><button onClick={this.props.handleLogout}>Logout</button></li>
                    </React.Fragment>)
                }
                </ul>
            </nav>
        )

    }

}

export default Navbar;