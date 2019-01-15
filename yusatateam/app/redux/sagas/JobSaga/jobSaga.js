import { call, put, all } from 'redux-saga/effects';
import { jobServices, userServices } from '../../services';
import { SERVICE } from '../../common/actionTypes';
import functions from '../../../common/functions';
import { NavigationActions } from 'react-navigation';

export function* serviceListSaga(action) {
    try {
        const [listData, status] = yield all([call(jobServices.getServiceList, action.serviceType), call(jobServices.serviceStatus)]);
        // alert(JSON.stringify(listData))
        if (listData) { yield put({ type: SERVICE.SERVICE_LIST_SUCCESS, listData }); }
        else { yield put({ type: SERVICE.SERVICE_LIST_FAILED }); }

        /**Put status response */
        if (status) { yield put({ type: SERVICE.SERVICE_STATUS_SUCCESS, status }); }
        else { yield put({ type: SERVICE.SERVICE_STATUS_FAILED }); }

    } catch (error) {
        yield put({ type: SERVICE.SERVICE_LIST_FAILED, error });
        functions.showToast('Something wrong', 'danger');
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
        const createData = yield call(jobServices.createJob, action.createdata);
        if (createData) {
            yield put({ type: SERVICE.CREATEJOB_SUCCESS, createData });
            yield put(NavigationActions.navigate({ routeName: 'Schedule' }));
            functions.showToast('Job created successfully', 'success');
            try {
                const listData = yield call(jobServices.getServiceList,'all');
                if (listData) {
                    yield put({ type: SERVICE.SERVICE_LIST_SUCCESS, listData })
                } else {
                    yield put({ type: SERVICE.SERVICE_LIST_FAILED })
                    functions.showToast('Unable to refresh Service List', 'danger');
                }
            } catch (error) {
                yield put({ type: SERVICE.SERVICE_LIST_FAILED, error })
                functions.showToast('something went wrong', 'danger');
            }
        }
        else {
            yield put({ type: SERVICE.CREATEJOB_FAILED });
            functions.showToast('Unable to create Job', 'danger');
        }
    } catch (error) {
        yield put({ type: SERVICE.CREATEJOB_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* companySaga(action) {
    try {
        const [jobvehicle, serviceType, technician] = yield all([call(jobServices.getVehicle),
        call(jobServices.getServiceType), call(jobServices.getTechnician, action.userRole)]);
        if (jobvehicle === null) { jobvehicle = [] }
        if (serviceType === null) { serviceType = [] }
        if (technician === null) { technician = [] }
        yield put({ type: SERVICE.SERVICE_COMPANY_SUCCESS, data: { technician, jobvehicle, serviceType } });
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_COMPANY_FAILED, error })
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* executeServiceSaga(action) {
    try {
        const data = yield call(jobServices.excecuteService);
        if (data) {
            yield put({ type: SERVICE.EXECUTE_SERVICE_SUCCESS, data });
            functions.showToast('Assigned successfully', 'success');
        } else {
            yield put({ type: SERVICE.EXECUTE_SERVICE_FAILED });
        }
    } catch (error) {
        yield put({ type: SERVICE.EXECUTE_SERVICE_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* serviceStatusSaga(action) {
    try {
        const status = yield call(jobServices.serviceStatus);
        if (data) {
            yield put({ type: SERVICE.SERVICE_STATUS_SUCCESS, status });
            // functions.showToast('Assigned successfully', 'success');
        } else {
            yield put({ type: SERVICE.SERVICE_STATUS_FAILED });
        }
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_STATUS_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}


export function* simDeviceSaga(action) {
    try {
        const [sim, device] = yield all([call(jobServices.sims), call(jobServices.devices)]);
        yield put({ type: SERVICE.SERVICE_DEVICE_SUCCESS, datas: { sim, device } });
        // if(sim) {
        //     yield put({ type: SERVICE.SERVICE_DEVICE_SUCCESS, datas: {sim, device}});
        // } else {
        //     yield put({ type: SERVICE.SERVICE_DEVICE_FAILED });
        // }
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_DEVICE_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}