import { call, put } from 'redux-saga/effects';

import userService from '../services/userServices';
import { CUSTOMER } from '../common/actionTypes';
import functions from '../../common/functions';

export function* cutomerList(action) {
    try {
        const data = yield call(userService.customerList);
        yield put({type: CUSTOMER.CUSTOMER_SUCCESS, data});
    } catch (error) {
        yield put({type: CUSTOMER.CUSTOMER_FAILED, error});
        functions.showToast('Unable to fetch customer list', 'danger');
    }
}