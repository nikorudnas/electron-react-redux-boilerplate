/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MainPage from './containers/MainPage';
import SecondPage from './containers/SecondPage';

export default () => (
  <App>
    <Switch>
      <Route path="/secondpage" component={SecondPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </App>
);
