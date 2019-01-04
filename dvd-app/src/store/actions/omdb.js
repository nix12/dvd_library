import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getOmdbSuccess = plot => ({
  type: actionTypes.GET_OMDB_SUCCESS,
  plot,
});

export const getOmdb = (title, year) => (dispatch) => {
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`;

  axios.get(`${url}t=${title}&y=${year}&plot=full`)
    .then((response) => {
      dispatch(getOmdbSuccess(response.data.Plot));
    });
};

export const clearOmdb = () => ({
  type: actionTypes.GET_OMDB_SUCCESS,
  plot: '',
});
