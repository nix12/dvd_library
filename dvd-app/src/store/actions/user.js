import axios from 'axios';
import * as actionTypes from './actionTypes';

export const userUpdateStart = () => ({
  type: actionTypes.USER_UPDATE_START,
});

export const userUpdateSuccess = (userId, email) => ({
  type: actionTypes.USER_UPDATE_SUCCESS,
  userId,
  email,
});

export const userUpdateFail = error => ({
  type: actionTypes.USER_UPDATE_FAIL,
  error,
});

export const update = (
  email = null,
  password = null,
  passwordConfirmation = null,
) => dispatch => new Promise((resolve) => {
  dispatch(userUpdateStart());

  const userData = {
    email,
    password,
    password_confirmation: passwordConfirmation,
  };

  const headers = {
    'access-token': localStorage.getItem('access-token'),
    expiry: localStorage.getItem('expiry'),
    'token-type': localStorage.getItem('token-type'),
    uid: localStorage.getItem('uid'),
    client: localStorage.getItem('client'),
  };
  const url = `https://boiling-retreat-40992.herokuapp.com/users/${localStorage.getItem('userId')}`;

  resolve(axios.put(url, userData, { headers })
    .then(() => {
      dispatch(userUpdateSuccess(
        localStorage.getItem('userId'),
        localStorage.getItem('email'),
      ));
    })
    .catch((err) => {
      const errors = [];

      if (err.response.data.errors.password) {
        errors.push('Password can\'t be empty.');
      }

      if (err.response.data.errors.email) {
        errors.push('E-mail can\'t be empty.');
      }

      dispatch(userUpdateFail(errors));
    }));
});
