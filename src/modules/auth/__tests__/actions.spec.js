import faker from 'faker';
import { expect } from 'chai';
import { getTestName } from '../../../../test/helpers';
import * as actions from '../actions';
import * as types from '../types';

describe(getTestName(__filename), () => {
  // Fetch user
  it('action creator fetchUserProfile creates proper actions', function () {
    const page = faker.random.number();
    const expectedAction = {
      type   : types.FETCH_USER_PROFILE,
      payload: { page }
    };

    expect(actions.fetchUserProfile({ page })).to.be.eql(expectedAction);
  });

  it('action creator fetchUserProfileSucceeded creates proper actions', function () {
    const payload = faker.lorem.word();
    const expectedAction = {
      type: types.FETCH_USER_PROFILE_SUCCEEDED,
      payload
    };

    expect(actions.fetchUserProfileSucceeded(payload)).to.be.eql(expectedAction);
  });

  it('action creator fetchUserProfileFailed creates proper actions', function () {
    const expectedAction = {
      type   : types.FETCH_USER_PROFILE_FAILED,
      payload: {}
    };

    expect(actions.fetchUserProfileFailed()).to.be.eql(expectedAction);
  });
});
