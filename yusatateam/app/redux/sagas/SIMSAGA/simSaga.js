import { call, put } from 'redux-saga/effects';
import { userServices } from '../../services';
import { SIM } from '../../common/actionTypes';

export function* simlogin(action) {
    try {
        const data = yield call(userServices.simlogin);
        yield put({type: SIM.SIM_SUCCESS, data});
    } catch (error) {
        yield put({type: SIM.SIM_FAILED, error});
    }
}