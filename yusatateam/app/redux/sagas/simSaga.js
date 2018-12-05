import { call, put } from 'redux-saga/effects';
import userService from '../services/userServices';
import { USER } from '../common/actionTypes';

export function* simlogin(action) {
    try {
        const data = yield call(userService.simlogin );
        yield put({type: USER.SIM_SUCCESS,data});
       
    } catch (error) {
        yield put({type: USER.SIM_FAILED,error});
       
    }
}