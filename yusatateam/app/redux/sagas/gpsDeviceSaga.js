import { call, put, all } from 'redux-saga/effects';
import { GPSDEVICE } from '../common/actionTypes';
import userServices from '../services/userServices'
import functions from '../../common/functions';

export function* gpsDeviceCountryIsd(action){
    try {
        const [countryISD, deviceType ]= yield all([call(userServices.gpsDeviceCountryIsd),call(userServices.gpsDeviceType)])
        yield put({ type: GPSDEVICE.GPSDEVICE_SUCCESS, datas: { countryISD, deviceType }});
    } catch(error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_FAILED, error })
        functions.showToast('Something went wrong', 'danger');
    }
}