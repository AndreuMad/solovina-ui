import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import get from 'lodash/get';
import moment from 'moment';
import localeData from './messages';
import getMessages from './utils/getMessagesByLang';

import './utils/addLocaleData';
import 'moment/min/locales.min';

export const DEFAULT_LANGUAGE = 'en-GB';

// Map the component props to the application state
const mapStateToProps = state => {
  const lang = get(state, 'auth.user.language', DEFAULT_LANGUAGE);
  const messages = getMessages(localeData, lang);

  moment.locale(lang);

  return { locale: lang, messages };
};

// setting a key={locale} to force React to re-render everything under it;
export default connect(mapStateToProps)(props => <IntlProvider key={props.locale} {...props}/>);
