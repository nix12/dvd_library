import React from 'react';

import classes from './Dropdown.module.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';

const dropdown = () => (
  <div className="dropdown">
    <button
      className={`${classes.Button} ${classes.btn} btn btn-secondary dropdown-toggle`}
      id="dropdownMenu2"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
        Menu
    </button>
    <DropdownMenu />
  </div>
);

export default dropdown;
