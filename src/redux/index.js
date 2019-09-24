/**
 * Combined reducer
 */

import { combineReducers } from 'redux';
import { movieListReducer } from './movieList/reducers';
import { movieDetailsReducer } from './MovieDetails/reducers';

export default combineReducers({
  movieListReducer,
  movieDetailsReducer
});
