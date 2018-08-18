import * as types from './types';

export const defaultState = {
  user: undefined,
  isSynced: false
};

export default (state = defaultState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case types.FETCH_USER_PROFILE:
      return {
        ...state,
        isSynced: false
      };

    case types.FETCH_USER_PROFILE_SUCCEEDED:
      return {
        ...state,
        isSynced: true,
        user    : payload
      };

    case types.FETCH_USER_PROFILE_FAILED:
      return {
        ...state,
        isSynced: true,
        user    : undefined
      };

    default:
      return state;
  }
};
