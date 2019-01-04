import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Dropdown from '../Dropdown/Dropdown';

const navigationItems = (props) => {
  const { isAuthenticated, name } = props;

  const loginNavigation = (
    <div className={classes.inline}>
      <NavigationItem link="/dvd-list">Library</NavigationItem>
      <Dropdown />
    </div>
  );

  return (
    <ul className="nav navbar-nav ml-auto">
      <NavigationItem link="#">{ isAuthenticated ? name : null }</NavigationItem>

      { isAuthenticated ? loginNavigation : <NavigationItem link="/auth">Login</NavigationItem> }
    </ul>
  );
};

navigationItems.defaultProps = {
  name: null,
};

navigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default navigationItems;
