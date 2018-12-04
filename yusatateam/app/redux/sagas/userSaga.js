import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Toast } from 'native-base';

import userService from '../services/userServices';
import { USER } from '../common/actionTypes';

export function* login(action) {
    try {
        const data = yield call(userService.doLogin, action.loginCredentials);
        yield put({type: USER.LOGIN_SUCCESS, data});
        yield put(NavigationActions.navigate({ routeName: 'Dashboard' }));
    } catch (error) {
        yield put({type: USER.LOGIN_FAILED, error});
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            type: "danger"
        })
    }
}