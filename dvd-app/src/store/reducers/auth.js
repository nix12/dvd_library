import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        userName: null,
        userId: null,
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    },
  },
  authRedirectPath: '/dvd-list',
};

const setAuthRedirectPath = (state, action) => updateObject(state, {
  authRedirectPath: action.path,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case (actionTypes.SET_AUTH_REDIRECT_PATH): return setAuthRedirectPath(state, action);
  default: return state;
  }
};

export default reducer;
