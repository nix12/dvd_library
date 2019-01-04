import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actions';

class Video extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;

    props.onShowMovie(id);
  }

  render() {
    const { videoFile } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video width="640" height="480" src={videoFile} controls>
        Your browser does not support this video
      </video>
    );
  }
}

Video.propTypes = {
  id: PropTypes.string.isRequired,
  videoFile: PropTypes.string.isRequired,
  onShowMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  videoFile: state.movie.videoFileUrl,
});

const mapDispatchToProps = dispatch => ({
  onShowMovie: movieId => dispatch(actions.showMovie(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
