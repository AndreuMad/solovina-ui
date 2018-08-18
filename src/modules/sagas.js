import { all } from 'redux-saga/effects';

import { saga as authorization } from './auth';
// -- start importing sagas
// -- end importing sagas

const rootSaga = function* () {
  return yield all([
    // -- start connecting sagas
    ...authorization
    // -- end connecting sagas
  ]);
};

export default rootSaga;
