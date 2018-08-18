import { IntlProvider } from 'react-intl';
import messages from '../../src/i18n/messages';

const intlOptions = {
  locale  : 'en',
  messages: messages.en
};

export const provider = new IntlProvider(intlOptions);

const { intl } = provider.getChildContext();

export default intl;
