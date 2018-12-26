import { call, put } from 'redux-saga/effects';

import userService from '../services/userServices';
import { GPSDEVICESEARCHCRITERIA } from '../common/actionTypes';
import functions from '../../common/functions';

export function* searchCriteria(action) {
    try {
        const data = yield call(userService.searchCriteria, action.filterData);
        alert(JSON.stringify(data))
        yield put({type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_SUCCESS, data});
    } catch (error) {
        yield put({type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_FAILED, error});
        functions.showToast('Something went wrong', 'danger');
    }
}