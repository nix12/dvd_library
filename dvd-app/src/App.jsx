import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import './App.css';
import Layout from './containers/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';

const asyncDvdLibrary = asyncComponent(() => import('./containers/DvdLibrary/DvdLibrary'));

const asyncDvdNew = asyncComponent(() => import('./containers/DvdNew/DvdNew'));

const asyncDvdShow = asyncComponent(() => import('./containers/DvdShow/DvdShow'));

const asyncSettings = asyncComponent(() => import('./containers/Settings/Settings'));

class App extends Component {
  componentDidUpdate = () => {
    const { loggedInUserId } = this.props;
    
    localStorage.setItem('userId', loggedInUserId);
  }

  render() {
    const { isAuthenticated } = this.props;

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/dvd-list" exact component={asyncDvdLibrary} />
          <Route path="/new" component={asyncDvdNew} />
          <Route path="/movies/:id" component={asyncDvdShow} />
          <Route path="/settings/:id" exact component={asyncSettings} />
          <Route path="/" exact component={asyncDvdLibrary} />
        </Switch>
      );
    }

    return (
      <Layout>
        { routes }
      </Layout>
    );
  }
}

App.defaultProps = {
  loggedInUserId: null,
};

App.propTypes = {
  loggedInUserId: PropTypes.number,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.reduxTokenAuth.currentUser.isSignedIn,
  loggedInUserId: state.reduxTokenAuth.currentUser.attributes.userId,
});

export default withRouter(connect(mapStateToProps)(App));
