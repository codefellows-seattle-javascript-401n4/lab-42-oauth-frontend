import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          {this.props.appTitle}
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

export default Header;
