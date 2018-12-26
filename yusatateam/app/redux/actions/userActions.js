import {
    USER,
    JOBS,
    SIM,
    DEVICE, 
    CUSTOMER,
    VEHICLE, 
    TECHNICIAN,
    GPSDEVICE,
    UPDATESCHEMA,
    SUBMITGPSFORM
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
    gpsFormRequest:() =>({type:SUBMITGPSFORM.SUBMITGPSFORM_REQUEST}),
    updateSchema: (companyId) => ({ type: UPDATESCHEMA.UPDATESCHEMA_REQUEST, companyId })
}