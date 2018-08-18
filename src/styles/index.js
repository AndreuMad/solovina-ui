import { injectGlobal } from 'styled-components';

import fontAwesomeStyles from 'font-awesome/scss/font-awesome.scss';
import fontStyles from './fonts';
import resetStyles from './reset';
import baseStyles from './base';

injectGlobal`
  ${resetStyles};
  ${fontAwesomeStyles};
  ${fontStyles};
  ${baseStyles};
`;
