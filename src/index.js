import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//import { bindActionCreators } from 'redux'
//import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/reducers";

// import registerServiceWorker from './serviceWorker';
// import store from './store/store';
/*ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

// import {loadMovie} from './actions/action';
// create a redux store with our reducer above and middleware

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// dispatch(loadMovie);
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
