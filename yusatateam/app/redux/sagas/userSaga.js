import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import userService from '../services/userServices';
import { USER } from '../common/actionTypes';

export function* login(action) {
    try {
        const data = yield call(userService.login, action.loginCredentials)
        alert(JSON.stringify(data));
        yield put({ type: USER.FETCHING_DATA_SUCCESS, data });
        yield put(NavigationActions.navigate({ routeName: 'Dashboard' }));
    } catch (error) {
        yield put({ type: USER.FETCHING_DATA_FAILURE, error });
    }
}