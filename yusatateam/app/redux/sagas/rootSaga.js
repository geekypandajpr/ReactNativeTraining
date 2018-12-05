import { takeLatest } from 'redux-saga/effects';

import { USER } from '../common/actionTypes';
import * as userSaga from './userSaga';
import * as simSaga from './simSaga';

export default function* rootSaga() {
    yield takeLatest(USER.LOGIN, userSaga.login),
    yield takeLatest(USER.SIM_lOGIN,simSaga.simlogin)
}