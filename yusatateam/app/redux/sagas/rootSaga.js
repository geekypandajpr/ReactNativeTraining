import { takeLatest } from 'redux-saga/effects';
import { USER } from '../common/actionTypes';
import * as userSaga from './userSaga';

export default function* rootSaga() {
    yield takeLatest(USER.LOGIN, userSaga.login)
}