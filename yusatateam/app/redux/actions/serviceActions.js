import { SERVICE } from '../common/actionTypes';

export default {
    serviceListRequest: () => ({ type: SERVICE.SERVICE_LIST_REQUEST }),
    ServiceHistoryRequest: () => ({ type: SERVICE.SERVICE_HISTORY_REQUEST }),
    VehicleRequest: () => ({ type: SERVICE.SERVICE_VEHICLE_REQUEST }),
    companyRequest: () => ({ type: SERVICE.SERVICE_COMPANY_REQUEST }),
    executeServiceRequest: () => ({ type: SERVICE.EXECUTE_SERVICE_REQUEST }),
    createJobRequests: (createdata) => ({ type: SERVICE.CREATEJOB_REQUEST,createdata }),
    serviceStatusRequests : () => ({type : SERVICE.SERVICE_STATUS_REQUEST}),

}