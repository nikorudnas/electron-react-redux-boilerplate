// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import testReducers from './testReducers';

const rootReducer = combineReducers({
  testReducers,
  router,
});

export default rootReducer;
