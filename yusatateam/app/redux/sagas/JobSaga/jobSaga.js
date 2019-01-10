import { call, put, all } from 'redux-saga/effects';
import { jobServices } from '../../services';
import { SERVICE } from '../../common/actionTypes';
import functions from '../../../common/functions';

export function* serviceListSaga(action) {
    try {
        const listData = yield call(jobServices.getServiceList);
        if (listData) {
            yield put({ type: SERVICE.SERVICE_LIST_SUCCESS, listData });
        }
        else {
            yield put({ type: SERVICE.SERVICE_LIST_FAILED });
        }
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_LIST_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* serviceHistorySaga(action) {
    try {
        const historyData = yield call(jobServices.getServiceHistory);
        if (historyData) {
            yield put({ type: SERVICE.SERVICE_HISTORY_SUCCESS, historyData });
        }
        else {
            yield put({ type: SERVICE.SERVICE_HISTORY_FAILED });
        }

    } catch (error) {
        yield put({ type: SERVICE.SERVICE_HISTORY_FAILED, error });
        functions.showToast('Something went wrong', 'danger');

    }
}

export function* createJobSaga(action) {
    try {
        const createData = yield call(jobServices.createJob);
        if (createData) {
            yield put({ type: SERVICE.CREATEJOB_SUCCESS, createData });
        }
        else {
            yield put({ type: SERVICE.CREATEJOB_FAILED });
        }

    } catch (error) {
        yield put({ type: SERVICE.CREATEJOB_FAILED, error });
        functions.showToast('Something went wrong', 'danger');

    }
}

export function* companySaga(action) {
    try {
        const [company, serviceType, technician] = yield all([call(jobServices.getCompany),
        call(jobServices.getServiceType), call(jobServices.getTechnician)]);
        yield put({ type: SERVICE.SERVICE_COMPANY_SUCCESS, data: [company, serviceType, technician] });
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_COMPANY_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* vehicleSaga(action) {
    try {
        const jobvehicle = yield call(jobServices.getVehicle);
        if (jobvehicle) {
            yield put({ type: SERVICE.SERVICE_VEHICLE_SUCCESS, jobvehicle });
        }
        else {
            yield put({ type: SERVICE.SERVICE_VEHICLE_FAILED });
        }

    } catch (error) {
        yield put({ type: SERVICE.SERVICE_VEHICLE_FAILED, error });
        functions.showToast('Something went wrong', 'danger');

    }
}
