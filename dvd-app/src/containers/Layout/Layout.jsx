import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends PureComponent {
  render() {
    const { isAuthenticated, loggedInUserName, children } = this.props;

    return (
      <div className="container-fluid">
        <Toolbar
          isAuth={isAuthenticated}
          userName={loggedInUserName}
        />
        <main>
          { children }
        </main>
      </div>
    );
  }
}

Layout.defaultProps = {
  isAuthenticated: false,
  loggedInUserName: false,
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool,
  loggedInUserName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.reduxTokenAuth.currentUser.isSignedIn,
  loggedInUserName: state.reduxTokenAuth.currentUser.attributes.userName,
});

export default connect(mapStateToProps)(Layout);
