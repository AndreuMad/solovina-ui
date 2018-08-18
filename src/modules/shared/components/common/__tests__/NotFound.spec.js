import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { getTestName } from '../../../../../../test/helpers';
import Component from '../NotFound';

describe(getTestName(__filename), () => {
  it('renders Not Found component', () => {
    const wrapper = shallow(<Component/>);

    expect(wrapper).to.be.a('object');
    expect(wrapper.hasClass('container-fluid')).to.eql(true);
  });
});
