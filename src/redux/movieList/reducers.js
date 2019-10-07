import * as types from './types'
const { API_CALL_SUCCESS } = types;

const initialState = {
  fetching: false,
  movieList: null,
  error: null
};

export function movieListReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, movieList: action.IMAGE_GALLERY };
    default:
      return state;
  }
}
