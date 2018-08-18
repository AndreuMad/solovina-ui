import { createStore } from 'redux';
import reducers from '../modules/reducer';
import middleware from '../middlewares';
import { runSaga } from '../middlewares/saga';

const store = createStore(reducers, middleware);

runSaga();

export default store;
