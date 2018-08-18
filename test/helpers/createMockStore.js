import configureStore from 'redux-mock-store';

const middlewares = [];
export const createMockStore = configureStore(middlewares);
export default createMockStore;
