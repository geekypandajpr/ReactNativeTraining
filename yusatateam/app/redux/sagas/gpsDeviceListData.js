import { call, put } from 'redux-saga/effects';
import userService from '../services/userServices';
import { GPSDEVICELISTDATA } from '../common/actionTypes';

export function* gpsDeviceListData(action) {
    try {
        const data = yield call(userService.gpsDeviceListData);
        yield put({type: GPSDEVICELISTDATA.GPSDEVICELISTDATA_SUCCESS, data});
    } catch (error) {
        yield put({type: GPSDEVICELISTDATA.GPSDEVICELISTDATA_FAILED, error});
    }
}