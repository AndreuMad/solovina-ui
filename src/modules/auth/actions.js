import * as types from './types';

export const fetchUserProfile = payload => ({
  type: types.FETCH_USER_PROFILE,
  payload
});

export const fetchUserProfileSucceeded = payload => ({
  type: types.FETCH_USER_PROFILE_SUCCEEDED,
  payload
});

export const fetchUserProfileFailed = () => ({
  type   : types.FETCH_USER_PROFILE_FAILED,
  payload: {}
});

export const requestResetPassword = payload => ({
  type: types.REQUEST_RESET_PASSWORD,
  payload
});

export const resetPasswordSuccess = () => ({
  type: types.RESET_PASSWORD_SUCCESS
});

export const resetPasswordFailed = () => ({
  type: types.RESET_PASSWORD_FAILED
});
