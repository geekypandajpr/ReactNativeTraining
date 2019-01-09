import { call, put } from 'redux-saga/effects';
import userService from '../../services/userServices';
import {INSTALLJOBS,UNINSTALLJOBS,REPAIRJOBS,REPLACEJOBS} from '../../common/actionTypes';

export function* jobInstallData(action) {
    try {
        const installData = yield call(userService.jobInstallData );
        yield put({type: INSTALLJOBS.INSTALLJOBS_SUCCESS,installData});
    } catch (error) {
        yield put({type: INSTALLJOBS.INSTALLJOBS_FAILED,error});
       
    }
}

export function* jobRepairData(action) {
    try {
        const repairData = yield call(userService.jobRepairData );
        yield put({type: REPAIRJOBS.REPAIRJOBS_SUCCESS,repairData});
    } catch (error) {
        yield put({type: REPAIRJOBS.REPAIRJOBS_FAILED,error});
       
    }
}

export function* jobReplaceData(action) {
    try {
        const replaceData = yield call(userService.jobReplaceData );
        yield put({type: REPLACEJOBS.REPLACEJOBS_SUCCESS,replaceData});
    } catch (error) {
        yield put({type: REPLACEJOBS.REPLACEJOBS_FAILED,error});
       
    }
}

export function* jobUnInstallData(action) {
    try {
        const unInstallData = yield call(userService.jobUnInstallData );
        yield put({type: UNINSTALLJOBS.UNINSTALLJOBS_SUCCESS,unInstallData});
    } catch (error) {
        yield put({type: UNINSTALLJOBS.UNINSTALLJOBS_FAILED,error});
       
    }
}