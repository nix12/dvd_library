import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/index';

import classes from './DvdShow.module.css';
import Video from '../../components/UI/Video/Video';
import Tabs from '../../components/Navigation/Tabs/Tabs';

class DvdShow extends Component {
  componentDidMount = () => {
    const { onSetAuthRedirectPath } = this.props;

    onSetAuthRedirectPath('/movies/:id');
  };

  render() {
    const {
      title, year, plot, match,
    } = this.props;

    return (
      <div>
        <Tabs />

        <div>
          <h1 className={`row justify-content-center ${classes.capitalize}`}>
            { title }
            {' '}
-
            { year }
          </h1>

          <div className="row justify-content-center">
            <Video
              id={match.params.id}
            />
          </div>


          <div className={`row justify-content-center ${classes.top}`}>
            <p className="col-10">
              { plot }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

DvdShow.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  plot: PropTypes.string.isRequired,
  onSetAuthRedirectPath: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  title: state.movie.title,
  year: state.movie.year,
  plot: state.movie.plot,
});

const mapDispatchtoProps = dispatch => ({
  onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(DvdShow);
