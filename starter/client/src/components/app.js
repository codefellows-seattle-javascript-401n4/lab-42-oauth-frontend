import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header';
import Footer from './footer';
import Navbar from './navbar';
import Chat from './chat';
import Login from './login';
import Profile from './profile';

import * as authActions from '../app/actions/auth';
import * as routeActions from '../app/actions/routes';

import '../style/main.scss';

class App extends React.Component {
  componentWillMount() {
    this.props.validate();
  }

  render() {
    const {
      auth,
      logout,
      route,
      switchRoute,
    } = this.props;
    return (
      <React.Fragment>

        <Header appTitle="Chat App" />

        <Navbar auth={auth} switchRoute={switchRoute} handleLogout={logout} />

        <main>

          <Switch location={{ pathname: route }}>
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>

        <Footer>
          <p>&copy;2017 401n4</p>
        </Footer>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  validate: () => dispatch(authActions.validate()),
  logout: () => dispatch(authActions.logout()),
  switchRoute: route => dispatch(routeActions.switchRoute(route)),
});

App.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
  route: PropTypes.func.isRequired,
  switchRoute: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
