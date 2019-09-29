import * as types from './types'
const { API_LOGIN_CALL_REQUEST, API_LOGIN_CALL_SUCCESS, API_LOGIN_CALL_FAILURE } = types;

const initialState = {
  fetching: false,
  movieList: null,
  error: null
};

export function movieListReducer(state = initialState, action) {
  switch (action.type) {
    case API_LOGIN_CALL_REQUEST:
      return { ...state, fetching: action.payload, error: null };
    case API_LOGIN_CALL_SUCCESS:
      return { ...state, fetching: false, movieList: action.IMAGE_GALLERY };
    case API_LOGIN_CALL_FAILURE:
      return { ...state, fetching: false, movieList: null, error: action.error };
    default:
      return state;
  }
}
