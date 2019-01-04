/* eslint no-shadow: ["error", { "allow": ["signOutUser"] }] */
/* eslint-env es6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { purgeStoredState } from 'redux-persist';
import { signOutUser } from '../../../redux-token-auth-config';
import persistConfig from '../../../persistConfig';

class Logout extends Component {
  componentDidMount = () => {
    this.signOutHandler();
  };

  signOutHandler = () => {
    const { signOutUser } = this.props;

    signOutUser()
      .then(() => {
        localStorage.setItem('email', null);
        localStorage.setItem('userId', null);
        purgeStoredState(persistConfig);
      });
  }

  render() {
    return (
      <Redirect to="/auth" />
    );
  }
}

Logout.propTypes = {
  signOutUser: PropTypes.func.isRequired,
};

export default connect(null, { signOutUser })(Logout);
