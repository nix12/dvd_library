import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const navigationItem = (props) => {
  const { exact, link, children } = props;

  return (
    <li className="nav-item">
      <Link
        exact={exact}
        to={link}
        className="nav-link"
      >
        { children }
      </Link>
    </li>
  );
};

navigationItem.defaultProps = {
  exact: '',
  children: null,
};

navigationItem.propTypes = {
  exact: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default navigationItem;
