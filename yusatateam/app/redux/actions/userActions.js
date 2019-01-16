import {
    USER,
    
    SIM,
    DEVICE,
    CUSTOMER,
    TECHNICIAN,
} from '../common/actionTypes';

export default {
    /**Login Request */
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),

    /**Update Schema Request */
    updateSchema: (companyId) => ({ type: USER.UPDATESCHEMA_REQUEST, companyId }),
    

    simRequest: () => ({ type: SIM.SIM_REQUEST }),
    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    technicianRequest: () => ({ type: TECHNICIAN.TECHNICIAN_REQUEST }),
}