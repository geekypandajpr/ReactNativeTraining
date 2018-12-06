import { call, put } from 'redux-saga/effects';
import userService from '../services/userServices';
import { SIM } from '../common/actionTypes';

export function* simlogin(action) {
    try {
        const data = yield call(userService.simlogin,action.req);
        yield put({type: SIM.SIM_SUCCESS, data});
    } catch (error) {
        yield put({type: SIM.SIM_FAILED, error});
    }
}