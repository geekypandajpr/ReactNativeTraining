import {call,put} from 'redux-saga/effects';
import { TECHNICIAN } from '../common/actionTypes';
import userService from '../services/userServices'


export function * technicianLogin(action){
    try{
        const data = yield call(userService.technicianLogin);
        yield put({type : TECHNICIAN.TECHNICIAN_SUCCESS,data})
    }catch(error){
        yield put({type : TECHNICIAN.TECHNICIAN_FAILED,error})
    }
    

}