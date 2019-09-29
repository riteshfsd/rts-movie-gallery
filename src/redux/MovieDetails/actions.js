import * as types from './types';
import Api from '../../api/Api';

const { API_PLANET_CALL_REQUEST, API_PLANET_CALL_SUCCESS } = types;

// export const getPlanetsListAction = pageNo => async dispatch => {
//   dispatch({ type: API_PLANET_CALL_REQUEST, payload: true });
//   const planetsData = await Api.getPlanetsList(pageNo);
//   let data = planetsData && planetsData.data ? planetsData.data : null;
//   dispatch({ type: API_PLANET_CALL_SUCCESS, data });
//   dispatch({ type: API_PLANET_CALL_REQUEST, payload: false });
// };
