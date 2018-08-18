import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { getTestName } from '../../../../../test/helpers';
import Component from '../Base';

describe(getTestName(__filename), () => {
  it('renders NotificationsSystem component', function () {

    const wrapper = shallow(<Component/>);

    expect(wrapper).to.be.a('object');
  });
});
