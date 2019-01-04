import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: null,
  error: null,
};

const userUpdateStart = state => updateObject(state, { loading: true, error: null });

const userUpdateSuccess = (state, action) => updateObject(state, {
  userId: action.userId,
  email: action.email,
  loading: false,
  error: null,
});

const userUpdateFail = (state, action) => updateObject(state, {
  loading: false,
  error: action.error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case (actionTypes.USER_UPDATE_START): return userUpdateStart(state, action);
  case (actionTypes.USER_UPDATE_SUCCESS): return userUpdateSuccess(state, action);
  case (actionTypes.USER_UPDATE_FAIL): return userUpdateFail(state, action);
  default: return state;
  }
};

export default reducer;
