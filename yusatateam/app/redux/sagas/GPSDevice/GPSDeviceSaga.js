import { call, put, all } from 'redux-saga/effects';

import { GPSDEVICE, GPSDEVICESEARCHCRITERIA, SUBMITGPSFORM } from '../../common/actionTypes';
import userServices from '../../services/userServices'
import functions from '../../../common/functions';

export function* gpsDeviceCountryIsd(action){
    try {
        const [ countryISD, deviceType,vehicleList ] = yield all([call(userServices.gpsDeviceCountryIsd),call(userServices.gpsDeviceType),call(userServices.gpsvehicleList)])
        yield put({ type: GPSDEVICE.GPSDEVICE_SUCCESS, datas: { countryISD, deviceType,vehicleList }});
    } catch(error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_FAILED, error })
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* getDeviceInfo(action) {
    try {
        const deviceInfo = yield call(userServices.associationDeviceInfo, action.deviceUDID)
        if (deviceInfo) {
            yield put({ type: GPSDEVICE.DEVICEINFO_SUCCESS, deviceInfo });
        } else {
            yield put({ type: GPSDEVICE.DEVICEINFO_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.DEVICEINFO_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* searchCriteria(action) {
    try {
        const [countryISD,list] = yield all([call(userServices.gpsDeviceCountryIsd),call(userServices.searchCriteria, action.filterData)])
        // alert(JSON.stringify(data.results.data))
        yield put({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_SUCCESS, data : { countryISD,list} });
    } catch (error) {
        yield put({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* SubmitFormLogin(action) {
    try {
        const data = yield call(userService.submitGpsForm, action.formdata)
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_SUCCESS, data })
    } catch (error) {
        yield put({ type: SUBMITGPSFORM.SUBMITGPSFORM_FAILED, error })
        functions.showToast('something Went wrong', 'danger')
    }
}