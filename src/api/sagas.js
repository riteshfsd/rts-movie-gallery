import {
  MOVIE_DISPLAY,
} from "../actions/action";

import { put, call, takeEvery, all } from "redux-saga/effects";

import { push } from "react-router-redirect";
import data from './data.json';
export default function* watchAll() {
  yield all([
    // takeEvery("REQUEST_CONTROLS_LIST", listSaga),
    // takeEvery("REQUEST_CONTROL_BY_ID", itemSaga),
    // takeEvery("REQUEST_CONTROL_BY_FILTER", filterSaga),
    // takeEvery("REQUEST_CONTROL_BY_CATEGORY", categorySaga),
    takeEvery("MOVIE_DISPLAY", searchSaga)
  ]);
}

function getMovieList(action) {
  return fetch(
    `http://localhost:4000/controls/autosuggester?search=${action.text}`
  );
}

function* searchSaga(action) {
  try {
    const response = yield call(getMovieList, action);
    const json = yield call([response, response.json]);
    yield put({ type: MOVIE_DISPLAY, json});
  } catch (error) {
    console.log("Error", error);
    yield put({ type: MOVIE_DISPLAY, error });
  }
}
