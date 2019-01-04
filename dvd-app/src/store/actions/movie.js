import * as actionTypes from './actionTypes';
import axios from '../../axios-dvd';

export const getMoviesStart = () => ({
  type: actionTypes.GET_MOVIES_START,
});

export const getMoviesSuccess = movies => ({
  type: actionTypes.GET_MOVIES_SUCCESS,
  movies: movies,
});

export const getMoviesFail = error => ({
  type: actionTypes.GET_MOVIES_FAIL,
  error,
});

export const clearMovies = () => ({
  type: actionTypes.CLEAR_MOVIES,
  movies: [],
});

export const getMovies = () => dispatch => new Promise((resolve) => {
  dispatch(getMoviesStart());

  const url = '/movies.json';

  resolve(
    axios.get(url)
      .then((response) => {
        const getMoviesList = [];

        Object.keys(response.data).forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(response.data, key)) {
            getMoviesList.push({
              ...response.data[key],
            });
          }
        });

        dispatch(getMoviesSuccess(getMoviesList));
      })
      .catch((err) => {
        const errorData = [];

        Object.entries(err.response.data.errors).forEach(([key, value]) => {
          /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
          errorData[key] = value[0];
        });

        dispatch(getMoviesFail(errorData));
      }),
  );
});

export const postMovieStart = () => ({
  type: actionTypes.POST_MOVIE_START,
});

export const postMovieSuccess = (id, movieData) => ({
  type: actionTypes.POST_MOVIE_SUCCESS,
  movieId: id,
  movieData,
});

export const postMovieFail = error => ({
  type: actionTypes.POST_MOVIE_FAIL,
  error,
});

export const postMovie = movieData => dispatch => new Promise((resolve) => {
  dispatch(postMovieStart());

  const url = '/movies';

  resolve(
    axios.post(url, movieData)
      .then((response) => {
        dispatch(postMovieSuccess(response.data.id, movieData));
      })
      .catch((err) => {
        const errorData = [];

        Object.values(err.response.data.errors).forEach(([key, value]) => {
          /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
          errorData[key] = value[0];
        });

        dispatch(postMovieFail(errorData));
      }),
  );
});

export const showMovieSuccess = (title, year, plot, videoFileUrl) => ({
  type: actionTypes.SHOW_MOVIE_SUCCESS,
  title,
  year,
  plot,
  videoFileUrl,
});

export const showMovieFail = error => ({
  type: actionTypes.SHOW_MOVIE_FAIL,
  error,
});

export const showMovie = movieId => dispatch => new Promise((resolve) => {
  const url = `/movies/${movieId}`;

  resolve(axios.get(url)
    .then((response) => {
      dispatch(showMovieSuccess(
        response.data.title,
        response.data.year,
        response.data.plot,
        response.data.video_file_url,
      ));
    })
    .catch((err) => {
      const errorData = [];

      Object.entries(err.response.data.errors).forEach(([key, value]) => {
        /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
        errorData[key] = value[0];
      });

      dispatch(postMovieFail(errorData));
    }));
});
