import { USER, JOBS, SIM, DEVICE, CUSTOMER } from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),
    simRequest: (req) => ({ type: SIM.SIM_REQUEST,req }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    jobRequest: () => ({ type: JOBS.JOBS_LOGIN }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
}