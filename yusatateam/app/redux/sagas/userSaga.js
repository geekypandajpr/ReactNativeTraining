import { call, put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Toast } from 'native-base';

import userService from '../services/userServices';
// import { USER } from '../common/actionTypes';

export function* login(action) {
    try {
        const data = yield call(userService.login, action.loginCredentials)
        Toast.show({
            text: "Wrong password!"
        })
        // yield put(NavigationActions.navigate({ routeName: 'Dashboard' }));
    } catch (error) {
    }
}