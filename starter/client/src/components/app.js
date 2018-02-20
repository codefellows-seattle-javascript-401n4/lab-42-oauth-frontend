import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Chat from './chat'
import Login from './login'
import Profile from './profile'

import * as authActions from '../app/actions/auth';
import * as routeActions from '../app/actions/routes';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.validate();
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Chat App" />

                { /* TODO: Probably should send the routing actions and the route state so you can show/hide links in the menu */ }
                <Navbar auth={this.props.auth}
                        switchRoute={this.props.switchRoute}
                        handleLogout={this.props.logout} />

                <main>
                   <Switch location={{pathname:this.props.route}}>
                     <Route exact path='/chat' component={Chat} />
                     <Route exact path='/profile' component={Profile} />
                     <Route exact path='/login' component={Login} />
                  </Switch>
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  route: state.route
});

const mapDispatchToProps = (dispatch, getState) => ({
  validate: () => dispatch( authActions.validate() ),
  logout: () => dispatch( authActions.logout() ),
  switchRoute: (route) => dispatch( routeActions.switchRoute(route) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(App); export default App;
