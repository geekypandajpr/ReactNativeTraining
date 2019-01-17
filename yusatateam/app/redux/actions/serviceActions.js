import { SERVICE } from '../common/actionTypes';

export default {
    serviceListRequest: (serviceType) => ({ type: SERVICE.SERVICE_LIST_REQUEST, serviceType }),
    ServiceHistoryRequest: () => ({ type: SERVICE.SERVICE_HISTORY_REQUEST }),
    VehicleRequest: () => ({ type: SERVICE.SERVICE_VEHICLE_REQUEST }),
    companyRequest: (userRole) => ({ type: SERVICE.SERVICE_COMPANY_REQUEST, userRole }),
    executeServiceRequest: (inventoryRequest) => ({ type: SERVICE.EXECUTE_SERVICE_REQUEST,inventoryRequest }),
    createJobRequests: (createdata) => ({ type: SERVICE.CREATEJOB_REQUEST, createdata }),
    serviceStatusRequests: () => ({ type: SERVICE.SERVICE_STATUS_REQUEST }),
    serviceDeviceRequest: () => ({ type: SERVICE.SERVICE_DEVICE_REQUEST }),
    serviceSimRequest: () => ({ type: SERVICE.SERVICE_SIM_REQUEST }),
    updateStatus: (status) => ({ type: SERVICE.SERVICE_STATUS_UPDATE_REQUEST, status})
}