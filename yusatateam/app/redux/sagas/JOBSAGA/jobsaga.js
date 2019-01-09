import { call, put } from 'redux-saga/effects';
import userService from '../../services/userServices';
import {CREATEJOB,JOBHISTORY,JOBLIST} from '../../common/actionTypes';

export function* jobListData(action) {
    try {
        const listData = yield call(userService.jobListData );
        if (listData) {
            yield put({type: JOBLIST.JOBLIST_SUCCESS,listData});
        }
        else{
            yield put({type: JOBLIST.JOBLIST_FAILED});
        }
    } catch (error) {
        yield put({type: JOBLIST.JOBLIST_FAILED,error});
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* jobHistoryData(action) {
    try {
        const historyData = yield call(userService.jobHistoryData );
        if(historyData)
        {
            yield put({type: JOBHISTORY.JOBHISTORY_SUCCESS,historyData});
        }
        else{
            yield put({type: JOBHISTORY.JOBHISTORY_FAILED});
        }
        
    } catch (error) {
        yield put({type: JOBHISTORY.JOBHISTORY_FAILED,error});
        functions.showToast('Something went wrong', 'danger');
       
    }
}

export function* createJobData(action) {
    try {
        const createData = yield call(userService.createJobData );
        if(createData)
        {
            yield put({type: CREATEJOB.CREATEJOB_SUCCESS,createData});
        }
        else{
            yield put({type: CREATEJOB.CREATEJOB_FAILED});
        }
       
    } catch (error) {
        yield put({type: CREATEJOB.CREATEJOB_FAILED,error});
        functions.showToast('Something went wrong', 'danger');
       
    }
}
