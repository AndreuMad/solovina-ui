import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render = Component => {
  const renderEl = (
    <AppContainer>
      <Component />
    </AppContainer>
  );

  ReactDOM.render(renderEl, document.getElementById('root'));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
