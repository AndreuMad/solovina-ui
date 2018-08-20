import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// -- start importing reducers
// -- end importing reducers

const rootReducer = combineReducers({
  router,
  // -- start connecting reducers
  // -- end connecting reducers
});

export default rootReducer;
