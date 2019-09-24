// import { displayMovie } from '../actions/action';
import { MOVIE_DISPLAY } from '../actions/type';

const INITIAL_STATE = {
  movieData: [],
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case MOVIE_DISPLAY:
        return Object.assign( {}, state, { movieData: action.status });
    default:
        return state;
  }
}
