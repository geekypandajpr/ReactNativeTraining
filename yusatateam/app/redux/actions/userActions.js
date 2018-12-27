import {
    USER,
    JOBS,
    SIM,
    DEVICE, 
    CUSTOMER,
    VEHICLE, 
    TECHNICIAN,
    GPSDEVICE,
    SUBMITGPSFORM,
    GPSDEVICESEARCHCRITERIA
} from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),
    simRequest: () => ({ type: SIM.SIM_REQUEST }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    jobRequest: () => ({ type: JOBS.JOBS_LOGIN }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    vehicleFetchRequest: (customer) => ({ type: VEHICLE.VEHICLE_FETCH, customer }),
    technicianRequest: () => ({ type: TECHNICIAN.TECHNICIAN_REQUEST }),
    gpsdeviceRequest:() =>({ type: GPSDEVICE.GPSDEVICE_REQUEST }),
    updateSchema: (companyId) => ({ type: USER.UPDATESCHEMA_REQUEST, companyId }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    submitgpsFormRequest: (formdata) => ({ type: SUBMITGPSFORM.SUBMITGPSFORM_REQUEST, formdata }),
    searchCriteria : (filterData) => ( { type : GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST , filterData}),
}