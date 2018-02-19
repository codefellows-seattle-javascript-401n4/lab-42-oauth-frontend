import React from 'react';

class Navbar extends React.Component {
  render() {
    const { auth } = this.props;
    if (!auth) {
      return null;
    }
    return (
      <nav>
        <ul>
          <React.Fragment>
            <li><button onClick={this.goToChat}>Chat</button></li>
            <li><button onClick={() => this.props.switchRoute('/profile')}>Profile</button></li>
            <li><button onClick={this.props.handleLogout}>Logout</button></li>
          </React.Fragment>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
