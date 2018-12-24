import { call, put } from 'redux-saga/effects';

import userService from '../services/userServices';
import { UPDATESCHEMA } from '../common/actionTypes';
import functions from '../../common/functions';

export function* updateSchema(action) {
    try {
        const data = yield call(userService.updateSchema, action.companyId);
        alert(JSON.stringify(data));
        //yield put({type: UPDATESCHEMA.UPDATESCHEMA_SUCCESS, data});
    } catch (error) {
        //yield put({type: UPDATESCHEMA.UPDATESCHEMA_FAILED, error});
        functions.showToast('Something went wrong', 'danger');
    }
}