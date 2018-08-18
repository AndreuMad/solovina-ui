import React from 'react';
import faker from 'faker';
import { expect } from 'chai';
import {
  getTestName,
  mountWithStore
} from '../../../../test/helpers/index';
import * as privateRoutes from '../private';
import Component from '../index';

describe(getTestName(__filename), () => {
  it('renders Loader component', function () {
    const mockedProps = {
      isAuthenticated : false,
      isSynced        : false,
      user            : {},
      fetchUserProfile: () => null
    };

    const wrapper = mountWithStore(<Component {...mockedProps}/>);

    expect(wrapper).to.be.a('object');
    expect(wrapper.find('.loader').length).to.be.equal(1);
  });

  it('renders NotAuthorized component', function () {
    const mockedProps = {
      isAuthenticated : false,
      isSynced        : true,
      user            : {},
      fetchUserProfile: () => null
    };

    const wrapper = mountWithStore(<Component {...mockedProps}/>);

    expect(wrapper.find('.not-auth')).to.have.length(1);
  });

  it('renders routes component', function () {

    const mockedProps = {
      isAuthenticated : true,
      isSynced        : true,
      user            : {
        role: faker.lorem.word()
      },
      fetchUserProfile: () => null,
      router          : {
        location: {
          pathname: faker.lorem.word()
        }
      }
    };

    this.sandbox.stub(privateRoutes, 'default').returns('');
    const wrapper = mountWithStore(<Component {...mockedProps}/>);
    expect(wrapper).to.be.a('object');
    expect(wrapper.find('.loader').length).to.be.equal(0);
  });

  it('handles initialize method on mount', function () {
    const fetchUserProfileSpy = this.sandbox.spy();
    const componentDidMountSpy = this.sandbox.spy(Component.prototype, 'componentDidMount');
    const mockedProps = {
      isAuthenticated : true,
      isSynced        : true,
      user            : {
        role: faker.lorem.word()
      },
      fetchUserProfile: fetchUserProfileSpy
    };

    this.sandbox.stub(privateRoutes, 'default').returns('');
    const wrapper = mountWithStore(<Component {...mockedProps}/>);

    expect(wrapper).to.be.a('object');
    expect(componentDidMountSpy).to.be.calledOnce;
    expect(fetchUserProfileSpy).to.be.calledOnce;
  });
});
