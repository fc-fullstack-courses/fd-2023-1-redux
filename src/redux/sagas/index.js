import { takeLatest, put } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as API from '../../api';
import * as UsersActionCreators from '../actions/usersActionCreators';

function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);

    const { data : { data : user } } = response;

    yield put(UsersActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(UsersActionCreators.createUserError(error));
  }
}

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
}

export default rootSaga;