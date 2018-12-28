import { call, put, all } from 'redux-saga/effects';

import {CREATEVEHICLETYPE } from '../common/actionTypes';
import userServices from '../services/userServices'

export function* CreateVehicleTypeLogin(action) {
    try {
        const data = yield call(userServices.createVehicletype)
        yield put({ type: CREATEVEHICLETYPE.CREATEVEHICLETYPE_SUCCESS, data })
    } catch (error) {
        yield put({ type: CREATEVEHICLETYPE.CREATEVEHICLETYPE_FAILED, error })
        functions.showToast('something Went wrong', 'danger')
    }
}