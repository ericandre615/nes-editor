"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes.jsx';
import { restoreCanvas } from './lib/sprite-functions';

import './reset.less';

const mountNode = document.getElementById('app');

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));
const middlewares = [logger];

let initialState = {};

// check sessionStorage and hydrate state from server or elsewhere that needs to persist across reloads
if ('sessionStorage' in window) {
  const appStorage = sessionStorage.getItem('appState');
  const appState = JSON.parse(appStorage);
  if (appState) {
    initialState = {
      pixel: appStorage.pixel,
      mouse: appStorage.mouse,
      workingCanvas: appStorage.workingCanvas,
      sprite: appStorage.sprite,
      palettes: appStorage.palettes,
      routing: appStorage.routing,
      tilemaps: appStorage.tilemaps
    };

    if (appState.workingCanvas.dataURL) {
      document.addEventListener('DOMContentLoaded', e => {
        restoreCanvas(document.getElementById('sprite-canvas'), appState.workingCanvas.dataURL);
      }, false);
    }
  }
}

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
const history = syncHistoryWithStore(browserHistory, store);

// listen for state changes and sync to storage
const syncStateToStorage = () => {
  const storeState = store.getState();
  const newstate = Object.assign({}, storeState, { workingCanvas: storeState.workingCanvas.present });

  try {
    sessionStorage.setItem('appState', JSON.stringify(newstate));
    console.log('sync state to storage', newstate);
  } catch(e) {
    // need to decide how to handle storage quota exceeded. Clearing it won't work because Redux is holding the state.
    console.log('Storage Error: ', e);
  }
};

store.subscribe(syncStateToStorage);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } >
      { routes }
    </Router>
  </Provider>,
  mountNode
);
