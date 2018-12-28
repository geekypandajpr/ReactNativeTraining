import { call, put } from 'redux-saga/effects';
import { ADDGPSVEHICLE } from '../common/actionTypes';
import userServices from '../services/userServices';
import functions from '../../common/functions';

export function* addgpsDeviceLogin(action){
    try{
        const data = yield call(userServices.addgpsVehicle, action.AddData);
        if(data) {
            yield put({type: ADDGPSVEHICLE.ADDGPSVEHICLE_SUCCESS, data });
            functions.showToast('Vehicle created successfully', 'danger');
        }  
    } catch(error){
        yield put({type: ADDGPSVEHICLE.ADDGPSVEHICLE_FAILED, error });
        functions.showToast('something Went wrong', 'danger');
    }
    
}