import { injectGlobal } from 'styled-components';

// Libs
import './libs/fontAwesome';

// Base
import fontStyles from './fonts';
import resetStyles from './reset';
import baseStyles from './base';
import gridStyles from './grid';

injectGlobal`
  ${resetStyles};
  ${fontStyles};
  ${baseStyles};
  ${gridStyles};
`;
