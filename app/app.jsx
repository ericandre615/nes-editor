"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes.jsx';
import { restoreCanvas } from './lib/sprite-functions';

import './reset.less';

const mountNode = document.getElementById('app');

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

let initialState = {
  pixel: reducers.pixelReducers,
  mouse: reducers.mouseReducers,
  workingCanvas: reducers.undoableCanvas,
  sprite: reducers.spriteReducers,
  palettes: reducers.paletteReducers
};

// check sessionStorage and hydrate state from server or elsewhere that needs to persist across reloads
if('sessionStorage' in window) {
  let appStorage = sessionStorage.getItem('appState');
  if(appStorage) {
    appStorage = JSON.parse(appStorage);
    initialState = {
      pixel: appStorage.pixel,
      mouse: appStorage.mouse,
      workingCanvas: appStorage.workingCanvas,
      sprite: appStorage.sprite,
      palettes: appStorage.palettes,
      routing: appStorage.routing
    };

    if(appStorage.workingCanvas.dataURL) {
      document.addEventListener('DOMContentLoaded', e => {
        restoreCanvas(document.getElementById('sprite-canvas'), appStorage.workingCanvas.dataURL);
      }, false);
    }
  }
}

const store = createStore(reducer, initialState);
const history = syncHistoryWithStore(browserHistory, store);

//listen for state changes and sync to storage
const syncStateToStorage = () => {
  const storeState = store.getState();
  let newstate = Object.assign({}, storeState, { workingCanvas: storeState.workingCanvas.present });

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
