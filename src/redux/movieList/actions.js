import * as types from './types';
// import Api from '../../api/Api';
import IMAGE_GALLERY from '../../api/data.json';
const { API_LOGIN_CALL_REQUEST, API_LOGIN_CALL_SUCCESS } = types;

// export const getLoginAuthAction = () => async dispatch => {
//   let pageNo = 1;
//   let usersList = [];
//   dispatch({ type: API_LOGIN_CALL_REQUEST, payload: true });
//   while (pageNo) {
//     const userData = await Api.getLoginAuth(pageNo);
//     let data = userData && userData.data && userData.data.results ? userData.data : null;
//     if (data) {
//       usersList = usersList.concat(data.results);
//       let url = data.next ? data.next : null;
//       pageNo = url ? url.split('?page=')[1] : null;
//     } else {
//       pageNo = null;
//     }
//   }
//   dispatch({ type: API_LOGIN_CALL_SUCCESS, usersList });
//   dispatch({ type: API_LOGIN_CALL_REQUEST, payload: false });
// };

export const getImageList = () => async dispatch => {
  dispatch({ type: API_LOGIN_CALL_SUCCESS, IMAGE_GALLERY });
};
