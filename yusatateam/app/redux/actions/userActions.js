import {
    USER,
    JOBS,
    SIM,
    DEVICE,
    CUSTOMER,
    TECHNICIAN,
    GPSDEVICE,
    SUBMITGPSFORM,
    CREATEVEHICLETYPE,
    GPSDEVICESEARCHCRITERIA
} from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),
    simRequest: () => ({ type: SIM.SIM_REQUEST }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    jobRequest: () => ({ type: JOBS.JOBS_LOGIN }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    technicianRequest: () => ({ type: TECHNICIAN.TECHNICIAN_REQUEST }),
    gpsdeviceRequest: () => ({ type: GPSDEVICE.GPSDEVICE_REQUEST }),
    updateSchema: (companyId) => ({ type: USER.UPDATESCHEMA_REQUEST, companyId }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    submitgpsFormRequest: (formdata) => ({ type: SUBMITGPSFORM.SUBMITGPSFORM_REQUEST, formdata }),
    CreatevehicletyepRequest: () => ({ type: CREATEVEHICLETYPE.CREATEVEHICLETYPE_REQUEST }),
    searchCriteria: (filterData) => ({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST, filterData }),
}