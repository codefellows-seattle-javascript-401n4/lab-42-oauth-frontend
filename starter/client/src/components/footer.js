import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
