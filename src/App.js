import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieListContainer from './containers/movieList/movieListContainer';
import MovieDetailsContainer from '../src/containers/movieDetails/movieDetailsContainer';

import './App.css';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={MovieListContainer} />
        <Route exact path="/details" component={MovieDetailsContainer} />

      </Switch>
    </Fragment>
  );
}

export default App;
