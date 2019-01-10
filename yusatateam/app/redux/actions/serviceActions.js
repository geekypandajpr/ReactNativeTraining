import { SERVICE } from '../common/actionTypes';

export default {
    serviceListRequest: () => ({ type: SERVICE.SERVICE_LIST_REQUEST }),
    ServiceHistoryRequest: () => ({ type: SERVICE.SERVICE_HISTORY_REQUEST }),
    VehicleRequest: () => ({ type: SERVICE.SERVICE_VEHICLE_REQUEST }),
    companyRequest: () => ({ type: SERVICE.SERVICE_COMPANY_REQUEST }),
    // technicianRequest: () => ({ type: SERVICE.SERVICE_TECHNICIAN_REQUEST }),
    // serviceTypeRequest: () => ({ type: SERVICE.SERVICE_TYPE_REQUEST }),
    createJobRequest: () => ({ type: SERVICE.CREATEJOB_REQUEST }),
}