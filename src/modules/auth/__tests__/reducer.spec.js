import faker from 'faker';
import { expect } from 'chai';
import { getTestName } from '../../../../test/helpers';
import reducer, { defaultState } from '../reducer';
import * as types from '../types';

describe(getTestName(__filename), () => {
  it('returns initialState', function () {
    expect(reducer(undefined, {})).to.be.eql(defaultState);
  });

  // Fetch user
  it('handles FETCH_USER_PROFILE type', function () {
    const action = {
      type   : types.FETCH_USER_PROFILE,
      payload: {}
    };
    const expectedState = {
      ...defaultState
    };
    expect(reducer(undefined, action)).to.be.eql(expectedState);
  });

  it('handles FETCH_USER_PROFILE_SUCCEEDED type', function () {
    const action = {
      type   : types.FETCH_USER_PROFILE_SUCCEEDED,
      payload: {
        profile: faker.random.number()
      }
    };
    const expectedState = {
      ...defaultState,
      isSynced: true,
      user    : action.payload
    };
    expect(reducer(undefined, action)).to.be.eql(expectedState);
  });

  it('handles FETCH_FLOW_LIST_FAILED type', function () {
    const action = {
      type   : types.FETCH_USER_PROFILE_FAILED,
      payload: {}
    };
    const expectedState = {
      ...defaultState,
      isSynced: true,
      user    : undefined
    };
    expect(reducer(undefined, action)).to.be.eql(expectedState);
  });
});
