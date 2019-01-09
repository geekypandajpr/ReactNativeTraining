import { call, put } from 'redux-saga/effects';
import userService from '../../services/userServices';
import {JOBS} from '../../common/actionTypes';

export function* jobInstallData(action) {
    try {
        const installData = yield call(userService.jobInstallData );
        yield put({type: JOBS.JOBS_SUCCESS,installData});
    } catch (error) {
        yield put({type: JOBS.JOBS_FAILED,error});
       
    }
}

export function* jobRepairData(action) {
    try {
        const repairData = yield call(userService.jobRepairData );
        yield put({type: JOBS.JOBS_SUCCESS,repairData});
    } catch (error) {
        yield put({type: JOBS.JOBS_FAILED,error});
       
    }
}

export function* jobReplaceData(action) {
    try {
        const replaceData = yield call(userService.jobReplaceData );
        yield put({type: JOBS.JOBS_SUCCESS,replaceData});
    } catch (error) {
        yield put({type: JOBS.JOBS_FAILED,error});
       
    }
}

export function* jobUnInstallData(action) {
    try {
        const unInstallData = yield call(userService.jobUnInstallData );
        yield put({type: JOBS.JOBS_SUCCESS,unInstallData});
    } catch (error) {
        yield put({type: JOBS.JOBS_FAILED,error});
       
    }
}