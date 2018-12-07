import { USER, JOBS, SIM, DEVICE, CUSTOMER, VEHICLE } from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),
    simRequest: () => ({ type: SIM.SIM_REQUEST }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    jobRequest: () => ({ type: JOBS.JOBS_LOGIN }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    vehicleFetchRequest: (customer) => ({ type: VEHICLE.VEHICLE_FETCH, customer })
}