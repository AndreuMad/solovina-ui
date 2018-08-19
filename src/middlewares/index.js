import { applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import sagaMiddleware from './saga';
import routerMiddleware from './router';

const middleware = compose(
  applyMiddleware(
    logger,
    sagaMiddleware,
    routerMiddleware
  ),
  window && window.devToolsExtension ? window.devToolsExtension() : devTools => devTools
);

export default middleware;
