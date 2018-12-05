import { call, put } from 'redux-saga/effects';
import userService from '../services/userServices';
import {JOBS} from '../common/actionTypes';

export function* jobPendingData(action) {
    try {
        const data = yield call(userService.jobPendingData );
        yield put({type: JOBS.JOBS_SUCCESS,data});
    } catch (error) {
        yield put({type: JOBS.JOBS_FAILED,error});
       
    }
}