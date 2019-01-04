import * as actionTypes from './actionTypes';

/* eslint-disable import/prefer-default-export */
export const setAuthRedirectPath = path => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path,
});
