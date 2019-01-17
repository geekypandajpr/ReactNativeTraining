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
            try {
                const listData = yield call(jobServices.getServiceList, 'all');
                yield put(NavigationActions.navigate({ routeName: 'Schedule' }));
                functions.showToast('Job created successfully', 'success');
                yield put({ type: SERVICE.CREATEJOB_SUCCESS, createData });

                if (listData) {
                    yield put({ type: SERVICE.SERVICE_LIST_SUCCESS, listData });
                } else {
                    yield put({ type: SERVICE.SERVICE_LIST_FAILED });
                    functions.showToast('Unable to refresh Service List', 'danger');
                }
            } catch (error) {
                yield put({ type: SERVICE.SERVICE_LIST_FAILED, error });
                functions.showToast('something went wrong', 'danger');
            }
        } else {
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
        const data = yield call(jobServices.excecuteService, action.inventoryRequest);
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
        } else {
            yield put({ type: SERVICE.SERVICE_STATUS_FAILED });
        }
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_STATUS_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

/**Update service status */
export function* serviceStatusUpdateSaga(action) {
    try {
        const status = yield call(jobServices.updateStatus, action.status);
        if (status) {
            const listData = yield call(jobServices.getServiceList, 'all');
            if(listData) { yield put({ type: SERVICE.SERVICE_LIST_SUCCESS, listData }); }
            yield put({ type: SERVICE.SERVICE_STATUS_UPDATE_SUCCESS, status });
            functions.showToast('Status updated', 'success');
        } else {
            yield put({ type: SERVICE.SERVICE_STATUS_UPDATE_FAILED });
            functions.showToast('Status not updated', 'danger');
        }
    } catch (error) {
        yield put({ type: SERVICE.SERVICE_STATUS_UPDATE_FAILED, error });
        functions.showToast('Something went wrong', 'danger');
    }
}

export function* simDeviceSaga(action) {
    if (action.ReplaceSim && action.ReplaceDevice) {
        try {
            const [DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice] = yield all([
                call(jobServices.defectiveSim, action.DefectiveSim),
                call(jobServices.replaceSim, action.ReplaceSim),
                call(jobServices.defectiveDevice, action.DefectiveDevice),
                call(jobServices.replaceDevice, action.ReplaceDevice)
            ]);
            if(DefectiveSim === null) { DefectiveSim = [] }
            if(ReplaceSim === null) { ReplaceSim = [] }
            if(DefectiveDevice === null) { DefectiveDevice = [] }
            if(ReplaceDevice === null) { ReplaceDevice = [] }
            yield put({ type: SERVICE.SERVICE_DEVICE_SUCCESS,datas: { DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice } });
        } catch (error) {
            yield put({ type: SERVICE.SERVICE_DEVICE_FAILED, error });
            functions.showToast('Something went wrong', 'danger');
        }
    } else {
        try {
            const [DefectiveSim, DefectiveDevice] = yield all([
                call(jobServices.defectiveSim, action.DefectiveSim),
                call(jobServices.defectiveDevice, action.DefectiveDevice),
            ]);
            if (DefectiveSim === null) { DefectiveSim = [] }
            if (DefectiveDevice === null) { DefectiveDevice = [] }
            const ReplaceSim = [], ReplaceDevice = [];
            yield put({ type: SERVICE.SERVICE_DEVICE_SUCCESS, datas: { DefectiveSim, ReplaceSim, DefectiveDevice, ReplaceDevice } });
        } catch (error) {
            yield put({ type: SERVICE.SERVICE_DEVICE_FAILED, error });
            functions.showToast('Something went wrong', 'danger');
        }
    }
}