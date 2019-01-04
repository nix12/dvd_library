import React from 'react';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  const { isAuth, userName } = props;

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <NavigationItems
          isAuthenticated={isAuth}
          name={userName}
        />
      </nav>
    </header>
  );
};

toolbar.defaultProps = {
  userName: null,
};

toolbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

export default toolbar;
