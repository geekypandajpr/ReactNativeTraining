import { takeLatest } from 'redux-saga/effects';

import { USER, JOBS, SIM } from '../common/actionTypes';
import * as userSaga from './userSaga';
import * as simSaga from './simSaga';
import * as jobSaga from'./jobSaga';

export default function* rootSaga() {
    yield takeLatest(USER.LOGIN, userSaga.login),
    yield takeLatest(SIM.SIM_REQUEST, simSaga.simlogin),
    yield takeLatest(JOBS.JOBS_LOGIN, jobSaga.jobPendingData)
}