import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// -- start importing reducers
// -- end importing reducers
import { reducer as notifications } from './notifications';
import { reducer as auth } from './auth';

const rootReducer = combineReducers({
  router,
  notifications,
  // -- start connecting reducers
  auth
  // -- end connecting reducers
});

export default rootReducer;
