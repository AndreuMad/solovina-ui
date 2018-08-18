import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as api from './api';
import { errorNotification } from '../notifications/actions';

export function* fetchUserProfile() {
  try {
    const payload = yield call(api.fetchUserProfile);

    if (process.env.NODE_ENV === 'production') {
      const { data: { Token } } = yield call(api.fetchAuthToken);
      localStorage.setItem('ctrlAuthJwt', Token);
    }

    yield put(actions.fetchUserProfileSucceeded(payload));
  } catch (ex) {
    yield put(actions.fetchUserProfileFailed());
    yield put(errorNotification(ex));
  }
}

export default [
  takeLatest(types.FETCH_USER_PROFILE, fetchUserProfile)
];
