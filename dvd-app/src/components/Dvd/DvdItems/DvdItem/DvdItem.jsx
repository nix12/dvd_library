import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../../../history';

class DvdItem extends Component {
  handleClick = () => {
    const { link } = this.props;

    history.push(link);
  };

  render() {
    const {
      id, title, year, plot,
    } = this.props;

    return (
      <tr onClick={this.handleClick}>
        <th scope="row">{ id }</th>
        <td>{ title }</td>
        <td>{ year }</td>
        <td>{ plot }</td>
      </tr>
    );
  }
}

DvdItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  plot: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default DvdItem;
