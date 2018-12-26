import userService from '../services/userServices';
import { call, put } from 'redux-saga/effects';
import { SUBMITGPSFORM } from '../common/actionTypes'
import functions from '../../common/functions'

export function* SubmitFormLogin(action) {
    try {
        const data = yield call(userService.submitGpsForm, action.formdata)
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_SUCCESS, data })
    } catch (error) {
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_FAILED, error })
        functions.showToast('something Went wrong','danger')
    }
}