import { call, put } from 'redux-saga/effects';

import userService from '../services/userServices';
import { VEHICLE } from '../common/actionTypes';
import functions from '../../common/functions';

export function* vehicleList(action) {
    try {
        const data = yield call(userService.vehicleList, action.customer);
        yield put({type: VEHICLE.VEHICLE_SUCCESS, data});
    } catch (error) {
        yield put({type: VEHICLE.VEHICLE_FAILED, error});
        functions.showToast('Unable to fetch association list', 'danger');
    }
}