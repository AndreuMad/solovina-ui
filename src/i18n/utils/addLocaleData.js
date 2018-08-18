import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';

addLocaleData([
  ...en,
  ...nl
]);
