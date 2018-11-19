import { call, put } from 'redux-saga/effects';

import userService from '../services/userServices';
import { USER } from '../common/actionTypes';

export function* login(action) {
    try {
        const data = yield call(userService.login, action.loginCredentials)
        alert(JSON.stringify(data));
        // yield put({ type: USER.FETCHING_DATA_SUCCESS, data });
    } catch (error) {
        // yield put({ type: USER.FETCHING_DATA_FAILURE, error });
    }
}