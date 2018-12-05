import { takeLatest } from 'redux-saga/effects';

import { USER,JOBS} from '../common/actionTypes';
import * as userSaga from './userSaga';
import * as simSaga from './simSaga';
import * as jobSaga from'./jobSaga';

export default function* rootSaga() {
    yield takeLatest(USER.LOGIN, userSaga.login),
    yield takeLatest(USER.SIM_lOGIN,simSaga.simlogin),
    yield takeLatest(JOBS.JOBS_LOGIN,jobSaga.jobPendingData)
}