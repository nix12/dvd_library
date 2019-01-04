import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';
import * as actions from '../../../store/actions/index';

import DvdItem from './DvdItem/DvdItem';
import Spinner from '../../UI/Spinner/Spinner';

class DvdItems extends Component {
  componentDidMount = () => {
    const { movies, onGetMovies } = this.props;

    if (movies.length > 0) {
      setInterval(() => {
        onGetMovies()
          .then(() => this.showAlert());
      }, 300000);
    } else {
      onGetMovies()
        .then(() => this.showAlert());
    }
  };

  componentWillUnmount = () => {
    clearInterval();
  };

  showAlert = () => {
    const { error, alert } = this.props;

    if (error) {
      alert.show('ERROR: Failed to fetch list of movies', { type: 'error' });
    }
  };

  render() {
    const { movies, loading } = this.props;

    const moviesList = movies.map(
      movie => (
        <DvdItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          plot={`${movie.plot.substring(0, 199)}...`}
          link={`/movies/${movie.id}`}
        />
      ),
    );

    let table = (
      <div className="container">
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Year</th>
                <th>Plot</th>
              </tr>
            </thead>

            <tbody>
              { moviesList }
            </tbody>
          </table>
        </div>
      </div>
    );

    if (loading) {
      table = <Spinner />;
    }

    return (
      <React.Fragment>
        { table }
      </React.Fragment>
    );
  }
}

DvdItems.defaultProps = {
  movies: [],
  error: '',
};

DvdItems.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  onGetMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string),
  alert: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  movies: state.movie.movies,
  loading: state.movie.loading,
  error: state.movie.error,
});

const mapDispatchToProps = dispatch => ({
  onGetMovies: () => dispatch(actions.getMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(DvdItems));
