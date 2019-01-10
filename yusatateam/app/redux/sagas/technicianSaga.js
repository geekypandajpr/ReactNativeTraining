import {call,put} from 'redux-saga/effects';
import { TECHNICIAN } from '../common/actionTypes';
import { userServices } from '../services';


export function * technicianLogin(action){
    try{
        const data = yield call(userServices.technicianLogin);
        yield put({type : TECHNICIAN.TECHNICIAN_SUCCESS,data})
    }catch(error){
        yield put({type : TECHNICIAN.TECHNICIAN_FAILED,error})
    }
    

}