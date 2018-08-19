import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// setting a key={locale} to force React to re-render everything under it;
import store from './utils/store';
import theme from './modules/shared/styles/theme';

// in fact this is the component that contains nested routes
// which depends on user authorization status
import Routes from './routes';

import './styles';

export default function App() {
  return (
    <Provider store={store} key="provider">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
