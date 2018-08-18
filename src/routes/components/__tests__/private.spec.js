import React from 'react';
import faker from 'faker';
import { expect } from 'chai';
import {
  getTestName,
  mountWithStore,
  createMockStore
} from '../../../../test/helpers/index';
import * as Notification from '../../../modules/notifications/containers/Base';
import * as NotFound from '../../../modules/shared/components/common/NotFound';
import Component from '../private';

describe(getTestName(__filename), () => {
  it('renders private routes', function () {
    this.sandbox.stub(Notification, 'default').returns('');
    this.sandbox.stub(NotFound, 'default').returns('');
    const wrapper = mountWithStore(<Component/>, createMockStore({
      auth              : {},
      router            : {
        location: { pathname: faker.lorem.word() }
      },
      termsAndConditions: {
        isFetching: false,
        data      : {}
      }
    }));

    expect(wrapper).to.be.a('object');
  });
});

