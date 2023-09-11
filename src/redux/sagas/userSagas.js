import { put } from 'redux-saga/effects';
import * as API from '../../api';
import * as UsersActionCreators from '../actions/usersActionCreators';

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);

    const { data: { data: user } } = response;

    yield put(UsersActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(UsersActionCreators.createUserError(error));
  }
}
