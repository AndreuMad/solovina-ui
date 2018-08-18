import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import IntlProvider from './i18n/IntlProvider';
import store from './utils/store';
import theme from './modules/shared/styles/theme';

// in fact this is the component that contains nested routes
// which depends on user authorization status
import Routes from './routes';

import './styles';

export default function App() {
  return (
    <Provider store={store} key="provider">
      <IntlProvider>
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
}
