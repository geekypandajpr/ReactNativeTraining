import {call,put,all} from 'redux-saga/effects';
import { GPSDEVICE,GPSDEVICEDATA } from '../common/actionTypes';
import userServices from '../services/userServices'

export function* gpslogin(action){
    try {
    const [data1,data2] = yield all([call(userServices.gpslogin),call(userServices.deviceValue)]);
        yield all([put({type: GPSDEVICE.GPSDEVICE_SUCCESS,data1}),put({type: GPSDEVICEDATA.GPSDEVICEDATA_SUCCESS,data2})]);
    } catch(error) {
        yield put({type: GPSDEVICE.GPSDEVICE_FAILED,error})
    }
}