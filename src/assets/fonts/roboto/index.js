import robotoRegularWoff from './roboto-regular.woff';
import robotoRegularWoff2 from './roboto-regular.woff2';

import robotoMediumWoff from './roboto-medium.woff';
import robotoMediumWoff2 from './roboto-medium.woff2';

import robotoBoldWoff from './roboto-bold.woff';
import robotoBoldWoff2 from './roboto-bold.woff2';

export default {
  family    : 'Roboto',
  variations: [
    {
      style             : 'normal',
      weight            : 400,
      localNamePrimary  : 'Roboto Regular',
      localNameSecondary: 'Roboto-Regular',
      woff              : robotoRegularWoff,
      woff2             : robotoRegularWoff2
    },
    {
      style             : 'normal',
      weight            : 500,
      localNamePrimary  : 'Roboto Medium',
      localNameSecondary: 'Roboto-Medium',
      woff              : robotoMediumWoff,
      woff2             : robotoMediumWoff2
    },
    {
      style             : 'normal',
      weight            : 700,
      localNamePrimary  : 'Roboto Bold',
      localNameSecondary: 'Roboto-Bold',
      woff              : robotoBoldWoff,
      woff2             : robotoBoldWoff2
    }
  ]
};
