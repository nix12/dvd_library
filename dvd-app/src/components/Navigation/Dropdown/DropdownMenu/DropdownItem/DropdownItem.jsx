import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const dropdownItem = (props) => {
  const {
    exact, link, click, children,
  } = props;

  return (
    <Link
      exact={exact}
      to={link}
      onClick={click}
      className="dropdown-item"
    >
      { children }
    </Link>
  );
};

dropdownItem.defaultProps = {
  exact: '',
  link: '',
  click: () => undefined,
  children: '',
};

dropdownItem.propTypes = {
  exact: PropTypes.string,
  link: PropTypes.string,
  click: PropTypes.func,
  children: PropTypes.string,
};

export default dropdownItem;
