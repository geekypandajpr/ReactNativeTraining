import { call, put } from 'redux-saga/effects';

import { userServices } from '../services';
import { CUSTOMER } from '../common/actionTypes';
import functions from '../../common/functions';

export function* cutomerList(action) {
    try {
        const data = yield call(userServices.customerList);
        yield put({type: CUSTOMER.CUSTOMER_SUCCESS, data});
    } catch (error) {
        yield put({type: CUSTOMER.CUSTOMER_FAILED, error});
        functions.showToast('Unable to fetch customer list', 'danger');
    }
}