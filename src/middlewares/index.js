import { applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import sagaMiddleware from './saga';
import routerMiddleware from './router';

const middleware = compose(
  applyMiddleware(
    logger,
    thunkMiddleware,
    sagaMiddleware,
    routerMiddleware
  ),
  window && window.devToolsExtension ? window.devToolsExtension() : devTools => devTools
);

export default middleware;
