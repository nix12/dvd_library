import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../../store/actions/index';

import DropdownItem from './DropdownItem/DropdownItem';

class DropdownMenu extends PureComponent {
  render() {
    const { loggedInUserId, onClearMovies } = this.props;

    return (
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <DropdownItem link={`/settings/${loggedInUserId}`} exact="true">Settings</DropdownItem>
        <DropdownItem link="/">About</DropdownItem>
        <div className="dropdown-divider" />
        <DropdownItem click={onClearMovies} link="/logout">Logout</DropdownItem>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  loggedInUserId: PropTypes.number.isRequired,
  onClearMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedInUserId: state.reduxTokenAuth.currentUser.attributes.userId,
});

const mapDispatchToProps = dispatch => ({
  onClearMovies: () => dispatch(actions.clearMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
