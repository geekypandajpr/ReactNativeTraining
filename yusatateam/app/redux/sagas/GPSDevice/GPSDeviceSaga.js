import { call, put, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { GPSDEVICE } from '../../common/actionTypes';
import { gpsDeviceServices } from '../../services';
import functions from '../../../common/functions';

/**CountryISD, Device Type, Vehicle List */
export function* gpsDeviceCountryIsd(action) {
    try {
        const [countryISD, deviceType, vehicleList] = yield all([
            call(gpsDeviceServices.gpsDeviceCountryIsd),
            call(gpsDeviceServices.gpsDeviceType),
            call(gpsDeviceServices.gpsvehicleList)
        ])
        yield put({ type: GPSDEVICE.GPSDEVICE_SUCCESS, datas: { countryISD, deviceType } });
        yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS, vehicleList });
    } catch (error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_FAILED, error })
        yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED })
        functions.showToast('Something went wrong', 'danger');
    }
}

/**GPS Device Information */
export function* getDeviceInfo(action) {
    try {
        const deviceInfo = yield call(gpsDeviceServices.associationDeviceInfo, action.deviceUDID)
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

/**GPS Device Association List */
export function* gpsDeviceListSaga(action) {
    try {
        const list = yield call(gpsDeviceServices.gpsDeviceList, action.listRequest);
        if (list) {
            yield put({ type: GPSDEVICE.GPSDEVICE_LIST_SUCCESS, list });
        } else {
            yield put({ type: GPSDEVICE.GPSDEVICE_LIST_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_LIST_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

/**Add GPS Device Association */
export function* addGPSDevice(action) {
    try {
        const data = yield call(gpsDeviceServices.addGPSDevice, action.gpsdevice)
        if (data) {
            yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_SUCCESS, data });
            functions.showToast('GPS Device added successfully', 'success');
            yield put(NavigationActions.navigate({ routeName: 'GPSDevice' }));
        } else {
            yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

/**Check GPS Device Association */
export function* checkGPSDeviceAssocition(action) {
    try {
        const data = yield call(gpsDeviceServices.checkGPSDeviceAssociation, action.deviceUDID);
        if (data) {
            yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_SUCCESS, data });
            functions.showToast('Device is not engaged', 'success');
        } else {
            yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED, error });
        functions.showToast('something Went wrong', 'danger');
    }
}

/**vehicleType */
export function* createVehicleType(action) {
    try {
        const data = yield call(gpsDeviceServices.createVehicleType)
        yield put({ type: GPSDEVICE.CREATE_VEHICLETYPE_SUCCESS, data })
    } catch (error) {
        yield put({ type: GPSDEVICE.CREATE_VEHICLETYPE_FAILED, error })
        functions.showToast('something Went wrong', 'danger')
    }
}

/** CreateVehicle*/
export function* createVehicle(action) {
    try {
        const data = yield call(gpsDeviceServices.createVehicle, action.AddData);
        // console.log(JSON.stringify(data))
        if (data) {
            functions.showToast('Vehicle created successfully', 'success');
            yield put(NavigationActions.navigate({ routeName: 'GPSDeviceForm' }));
            try {
                const vehicleList = yield call(gpsDeviceServices.gpsvehicleList);
                yield put({ type: GPSDEVICE.CREATEVEHICLE_SUCCESS, data });
                if(vehicleList) {
                    yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS, vehicleList });
                } else {
                    yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED, error });
                    functions.showToast('Unable to refresh vehicle list', 'danger');
                }
            } catch (error) {
                yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED, error });
                functions.showToast('something went wrong', 'danger');
            }
        } else {
            yield put({ type: GPSDEVICE.CREATEVEHICLE_FAILED });
            functions.showToast('Unable to create vehicle', 'danger');
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.CREATEVEHICLE_FAILED, error });
        functions.showToast('something Went wrong', 'danger');
    }
}