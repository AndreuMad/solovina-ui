import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { ConnectedRouter as Router } from 'react-router-redux';
import history from '../../src/utils/history';

const middlewares = [];
export const mockStore = configureStore(middlewares);
const defStore = mockStore({});

const mountWithStore = (component, store = defStore) => {
  const context = {
    store
  };
  return mount((
    <Provider store={store} key="provider">
      <Router history={history}>
        {component}
      </Router>
    </Provider>
  ), { context });
};

export default mountWithStore;
