import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const tabs = () => (
  <ul className="nav nav-tabs">
    <NavigationItem link="/dvd-list">Library</NavigationItem>
    <NavigationItem link="/new">Upload</NavigationItem>
  </ul>
);

export default tabs;
