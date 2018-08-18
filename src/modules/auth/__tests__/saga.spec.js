import faker from 'faker';
import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { getTestName } from '../../../../test/helpers';
import * as saga from '../saga';
import * as actions from '../actions';
import * as api from '../api';

describe(getTestName(__filename), () => {
  describe('fetchUserProfile', () => {
    const expectedProfile = {
      profile: faker.lorem.word()
    };

    const generator = saga.fetchUserProfile();

    it('gen returns call api.fetchUserProfile', function () {
      expect(generator.next().value).to.be.eql(call(api.fetchUserProfile));
    });

    it('gen returns put actions.fetchUserProfileSucceeded', function () {

      expect(generator.next(expectedProfile).value).to.be.eql(put(actions.fetchUserProfileSucceeded(expectedProfile)));
    });

    it('gen returns put actions.fetchUserProfileFailed', function () {
      expect(generator.throw().value).to.be.eql(put(actions.fetchUserProfileFailed()));
    });
  });
});
