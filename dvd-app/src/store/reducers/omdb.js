import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  plot: '',
};

const getOmdbSucess = (state, action) => updateObject(state, {
  plot: action.plot,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case (actionTypes.GET_OMDB_SUCCESS): return getOmdbSucess(state, action);
  default: return state;
  }
};

export default reducer;
