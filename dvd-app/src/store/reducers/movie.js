import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  title: null,
  year: null,
  plot: null,
  videoFileUrl: null,
};

const getMoviesStart = state => updateObject(state, { loading: true });

const getMoviesSuccess = (state, action) => updateObject(state, {
  movies: action.movies,
  loading: false,
});

const getMoviesFail = (state, action) => updateObject(state, {
  loading: false,
  error: action.error,
});

const clearMovies = (state, action) => updateObject(state, { movies: action.movies });

const postMovieStart = state => updateObject(state, { loading: true });

const postMovieSuccess = (state, action) => {
  const newMovie = {
    ...action.movieData,
    id: action.movieId,
  };

  return updateObject(state, {
    movies: state.movies.concat(newMovie),
    loading: false,
  });
};

const postMovieFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const showMovieSuccess = (state, action) => updateObject(state, {
  title: action.title,
  year: action.year,
  plot: action.plot,
  videoFileUrl: action.videoFileUrl,
});

const showMovieFail = (state, action) => updateObject(state, { error: action.error });

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case (actionTypes.GET_MOVIES_START): return getMoviesStart(state, action);
  case (actionTypes.GET_MOVIES_SUCCESS): return getMoviesSuccess(state, action);
  case (actionTypes.GET_MOVIES_FAIL): return getMoviesFail(state, action);
  case (actionTypes.CLEAR_MOVIES): return clearMovies(state, action);
  case (actionTypes.POST_MOVIE_START): return postMovieStart(state, action);
  case (actionTypes.POST_MOVIE_SUCCESS): return postMovieSuccess(state, action);
  case (actionTypes.POST_MOVIE_FAIL): return postMovieFail(state, action);
  case (actionTypes.SHOW_MOVIE_SUCCESS): return showMovieSuccess(state, action);
  case (actionTypes.SHOW_MOVIE_FAIL): return showMovieFail(state, action);
  default: return state;
  }
};

export default reducer;
