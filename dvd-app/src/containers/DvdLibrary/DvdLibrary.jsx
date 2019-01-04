import React from 'react';
import { Switch, Route } from 'react-router-dom';

import dvdList from '../DvdList/DvdList';
import DvdAdd from '../DvdNew/DvdNew';
import Tabs from '../../components/Navigation/Tabs/Tabs';

const DvdLibrary = () => (
  <div className="container">
    <Tabs />

    <Switch>
      <Route path="/dvd-list" component={dvdList} />
      <Route path="/new" component={DvdAdd} />
    </Switch>
  </div>
);

export default DvdLibrary;
