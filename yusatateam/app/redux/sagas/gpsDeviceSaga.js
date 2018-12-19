import {call,put} from 'redux-saga/effects';
import { GPSDEVICE } from '../common/actionTypes';
import userServices from '../services/userServices'

export function* gpslogin(action){
    try {
    const data = yield call(userServices.gpslogin);
        yield put({type: GPSDEVICE.GPSDEVICE_SUCCESS,data}) 
    } catch(error) {
        yield put({type: GPSDEVICE.GPSDEVICE_FAILED,error})
    }
}