import { takeLatest } from 'redux-saga/effects';

import { USER, JOBS, SIM, CUSTOMER, DEVICE, VEHICLE,TECHNICIAN } from '../common/actionTypes';
import * as userSaga from './userSaga';
import * as simSaga from './simSaga';
import * as deviceSaga from './deviceSaga';
import * as jobSaga from'./jobSaga';
import * as cutomerSaga from './customerSaga';
import * as vehicleSaga from './vehicleSaga';
import * as technicianSaga from './technicianSaga';

export default function* rootSaga() {
    yield takeLatest(USER.LOGIN, userSaga.login),
    yield takeLatest(SIM.SIM_REQUEST, simSaga.simlogin),
    yield takeLatest(DEVICE.DEVICE_REQUEST, deviceSaga.loginDevice)
    yield takeLatest(JOBS.JOBS_LOGIN, jobSaga.jobPendingData),
    yield takeLatest(CUSTOMER.CUSTOMER_FETCH, cutomerSaga.cutomerList),
    yield takeLatest(VEHICLE.VEHICLE_FETCH, vehicleSaga.vehicleList),
    yield takeLatest(TECHNICIAN.TECHNICIAN_REQUEST,technicianSaga.technicianLogin)
}