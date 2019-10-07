import * as types from './types';
import IMAGE_GALLERY from '../../api/data.json';
const { API_CALL_SUCCESS } = types;

export const getImageList = () => async dispatch => {
  dispatch({ type: API_CALL_SUCCESS, IMAGE_GALLERY });
};
