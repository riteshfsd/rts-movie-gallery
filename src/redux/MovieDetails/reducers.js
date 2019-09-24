import * as types from './types';
const {
  API_PLANET_CALL_REQUEST,
  API_PLANET_CALL_SUCCESS,
  API_PLANET_CALL_FAILURE
} = types;

const initialState = {
  fetching: false,
  planetsList: [],
  error: null,
  count: 0,
  pageURLNo: -1
};

export function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case API_PLANET_CALL_REQUEST:
      return { ...state, fetching: action.payload, error: null };
    case API_PLANET_CALL_SUCCESS:
      const url = action && action.data && action.data.next ? action.data.next : null;
      let pageNo = url ? url.split('?page=')[1] : -1;
      pageNo = parseInt(pageNo,10);
      const planetsListData = state.planetsList.concat(action.data.results)
      return {
        ...state,
        fetching: false,
        planetsList: planetsListData,
        pageURLNo: pageNo,
        count: action.data.count
      };
    case API_PLANET_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        planetsList: null,
        error: action.error
      };
    default:
      return state;
  }
}
