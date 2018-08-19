import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// -- start importing reducers
// -- end importing reducers
import { reducer as auth } from './auth';

const rootReducer = combineReducers({
  router,
  // -- start connecting reducers
  auth
  // -- end connecting reducers
});

export default rootReducer;
