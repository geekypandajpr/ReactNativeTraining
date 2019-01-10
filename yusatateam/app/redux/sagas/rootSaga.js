import { takeLatest } from 'redux-saga/effects';

import {
    USER,
    SIM,
    CUSTOMER,
    DEVICE,
    TECHNICIAN,
    GPSDEVICE,
    GPSDEVICESEARCHCRITERIA,
    SERVICE,
} from '../common/actionTypes';

/**Login Sagas */
import * as userSaga from './userSaga';

/**GPS Device Sagas*/
import * as gpsDeviceSaga from './GPSDevice/GPSDeviceSaga';

/**Job sagas */
import * as jobSaga from './JobSaga/jobSaga';


import * as simSaga from './SIMSAGA/simSaga';
import * as deviceSaga from './deviceSaga';
import * as technicianSaga from './technicianSaga';

export default function* rootSaga() {
    /**Login */
    yield takeLatest(USER.LOGIN, userSaga.login)

    // /**Region & Company Filter Schema*/
    yield takeLatest(USER.UPDATESCHEMA_REQUEST, userSaga.updateSchema)

    // /**GPS Device */
    yield takeLatest(GPSDEVICE.GPSDEVICE_REQUEST, gpsDeviceSaga.gpsDeviceCountryIsd),
    yield takeLatest(GPSDEVICE.DEVICEINFO_REQUEST, gpsDeviceSaga.getDeviceInfo),
    yield takeLatest(GPSDEVICE.ADD_GPS_DEVICE_REQUEST, gpsDeviceSaga.addGPSDevice),
    yield takeLatest(GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, gpsDeviceSaga.checkGPSDeviceAssocition),
    yield takeLatest(GPSDEVICE.CREATE_VEHICLETYPE_REQUEST, gpsDeviceSaga.createVehicleType),
    yield takeLatest(GPSDEVICE.CREATEVEHICLE_REQUEST, gpsDeviceSaga.createVehicle),
    yield takeLatest(GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST, gpsDeviceSaga.searchCriteria)

    // /**Jobs Schema */
    yield takeLatest(SERVICE.CREATEJOB_REQUEST, jobSaga.createJobSaga), 
    yield takeLatest(SERVICE.SERVICE_HISTORY_REQUEST, jobSaga.serviceHistorySaga), 
    yield takeLatest(SERVICE.SERVICE_LIST_REQUEST, jobSaga.serviceListSaga),
    yield takeLatest(SERVICE.SERVICE_COMPANY_REQUEST, jobSaga.companySaga),
    yield takeLatest(SERVICE.SERVICE_VEHICLE_REQUEST, jobSaga.vehicleSaga),


    // /**Sim Info */
    yield takeLatest(SIM.SIM_REQUEST, simSaga.simlogin)

    yield takeLatest(DEVICE.DEVICE_REQUEST, deviceSaga.loginDevice)
    // yield takeLatest(CUSTOMER.CUSTOMER_FETCH, cutomerSaga.cutomerList)
    // yield takeLatest(TECHNICIAN.TECHNICIAN_REQUEST, technicianSaga.technicianLogin)

}