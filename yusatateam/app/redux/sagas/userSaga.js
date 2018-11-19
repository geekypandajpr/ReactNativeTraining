import { call, put } from 'redux-saga/effects';
import { userService } from '../services/index';

export function* login(action) {
    try {
        const data = call(userService.login, action.loginCredentials)
        alert(JSON.stringify(data));
        // yield put({ type: actionTypes.FETCHING_DATA_SUCCESS, data });
    } catch (error) {
        // yield put({ type: actionTypes.FETCHING_DATA_FAILURE, error });
    }
}