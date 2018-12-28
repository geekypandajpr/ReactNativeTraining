import { call, put } from 'redux-saga/effects';
import { ADDGPSVEHICLE } from '../common/actionTypes';
import userServices from '../services/userServices';

export function* addgpsDeviceLogin(action){
    try{
        const data = yield call(userServices.addgpsVehicle,action.AddData);
        yield put(ADDGPSVEHICLE.ADDGPSVEHICLE_SUCCESS,data)
    }catch(error){
        yield put(ADDGPSVEHICLE.ADDGPSVEHICLE_FAILED,error)
    }
    
}