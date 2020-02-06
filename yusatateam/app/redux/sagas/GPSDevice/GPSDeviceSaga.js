import { call, put, all, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import { GPSDEVICE } from '../../common/actionTypes';
import { gpsDeviceServices } from '../../services';
import functions from '../../../common/functions';

/**CountryISD, Device Type, Vehicle List */
export function* gpsDeviceCountryIsd(action) {
    try {
        const [countryISD, deviceType, vehicleList, inventoryDevice, inventorySim] = yield all([
            call(gpsDeviceServices.gpsDeviceCountryIsd),
            call(gpsDeviceServices.gpsDeviceType),
            call(gpsDeviceServices.gpsvehicleList, action.companyId),
            call(gpsDeviceServices.getInventoryItems, action.deviceReq),
            call(gpsDeviceServices.getInventoryItems, action.simReq)
        ]);
        yield put({ type: GPSDEVICE.GPSDEVICE_SUCCESS, datas: { countryISD, deviceType, inventoryDevice, inventorySim } });
        yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS, vehicleList });
    } catch (error) {
        yield put({ type: GPSDEVICE.GPSDEVICE_FAILED, error });
        yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED });
        functions.showToast('Something Went Wrong', 'danger');
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
        functions.showToast('Something Went Wrong', 'danger');
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
        functions.showToast('Something Went Wrong', 'danger');
    }
}

/**Add GPS Device Association */
export function* addGPSDevice(action) {
    const req = {
        "betweenFilter": {
            "flag": false,
            "isDate": false,
            "isOrCondition": false
        },
        "cFilter": { "flag": false },
        "columnNames": [""],
        "iDisplayLength": 10,
        "iDisplayStart": 0,
        "iSortCol_0": 0,
        "inFilter": { "flag": false },
        "sEcho": 0,
        "sSortDir_0": "",
        "searchColumnNamesWithText": [""]
    };
    try {
        const data = yield call(gpsDeviceServices.addGPSDevice, action.gpsdevice)
        if (data) {
            try {
                const list = yield call(gpsDeviceServices.gpsDeviceList, req);
                yield put(NavigationActions.navigate({ routeName: 'GPSDevice' }));
                functions.showToast('GPS Device Added Successfully', 'success');
                yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_SUCCESS, data });
    
                if (list) {
                    yield put({ type: GPSDEVICE.GPSDEVICE_LIST_SUCCESS, list });
                } else {
                    yield put({ type: GPSDEVICE.GPSDEVICE_LIST_FAILED });
                }
            } catch (error) {
                yield put({ type: GPSDEVICE.GPSDEVICE_LIST_FAILED, error });
                functions.showToast('Something Went Wrong', 'danger');
            }
        } else {
            yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.ADD_GPS_DEVICE_FAILED, error });
        functions.showToast('Something Went Wrong', 'danger');
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
        functions.showToast('Something Went Wrong', 'danger');
    }
}

/** Free Vehicle List */
export function* getFreeVehicles(action) {
    console.log(action.companyId);
    try {
        const vehicleList = yield call(gpsDeviceServices.gpsvehicleList, action.companyId)
        console.log(vehicleList)
        if(vehicleList) {
            yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS, vehicleList });
        }
        
    } catch (error) {
        yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED, error });
        functions.showToast('Something Went Wrong', 'danger');
    }
}

/**vehicleType */
export function* createVehicleType(action) {
    try {
        const data = yield call(gpsDeviceServices.createVehicleType)
        yield put({ type: GPSDEVICE.CREATE_VEHICLETYPE_SUCCESS, data })
    } catch (error) {
        yield put({ type: GPSDEVICE.CREATE_VEHICLETYPE_FAILED, error })
        functions.showToast('Something Went Wrong', 'danger');
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
                const loginResponse = (state) => state.loginData.data.results.companyId;
                const companyId = yield select(loginResponse);
                const vehicleList = yield call(gpsDeviceServices.gpsvehicleList, companyId);
                yield put({ type: GPSDEVICE.CREATEVEHICLE_SUCCESS, data });
                if(vehicleList) {
                    yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS, vehicleList });
                } else {
                    yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED, error });
                }
            } catch (error) {
                yield put({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED, error });
                functions.showToast('Something Went Wrong', 'danger');
            }
        } else {
            yield put({ type: GPSDEVICE.CREATEVEHICLE_FAILED });
        }
    } catch (error) {
        yield put({ type: GPSDEVICE.CREATEVEHICLE_FAILED, error });
        functions.showToast('Something Went Wrong', 'danger');
    }
}