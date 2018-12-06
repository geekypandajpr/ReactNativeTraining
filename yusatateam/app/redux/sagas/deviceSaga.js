
import {put,call} from 'redux-saga/effects'
import userServices from '../services/userServices';
import { DEVICE } from '../common/actionTypes';

export function* loginDevice(action){
    try{
        const data = yield call(userServices.devicelogin)
            yield put ({type : DEVICE.DEVICE_SUCCESS,data})
    }catch(error){
            yield put ({type : DEVICE.DEVICE_FAILED,error})
    }
}