import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import Layout from './components/layout.jsx';
import Home from './components/home/home.jsx';
import NoRoute from './components/noroute.jsx';

export default (
  <Route name="app" path="/" component={ Layout }>
    <IndexRoute component={Home} />
    <Route path="*" component={ NoRoute } />
  </Route>
);
