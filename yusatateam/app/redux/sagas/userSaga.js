import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import userService from '../services/userServices';
import { USER } from '../common/actionTypes';
import functions from '../../common/functions';

export function* login(action) {
    try {
        const data = yield call(userService.login, action.loginCredentials);
        yield put({type: USER.LOGIN_SUCCESS, data});
        yield put(NavigationActions.navigate({ routeName: 'Dashboard',params : {data}}));
    } catch (error) {
        yield put({type: USER.LOGIN_FAILED, error});
        functions.showToast('Wrong Credentials', 'danger');
    }
}