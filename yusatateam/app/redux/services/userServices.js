import Api from '../common/api';
import { USER } from '../common/urls';
import loginData from '../../assets/JSONData/loginData';
import SimData from '../../assets/JSONData/SimData';
import customerData from '../../assets/JSONData/customerData';

export const login = data => Api.post(USER.LOGIN, data);

export default userService = {
    login,
    doLogin,
    simlogin,
    jobPendingData,
    customerList
}

/**LOGIN API CALL */
export function doLogin(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(loginData);
        }, 3000)
    });
}

/**SIM API CALL */
export function simlogin(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(SimData);
        }, 3000)
    });
}

/**JOBS API CALL */
export function jobPendingData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(VehicleDetail);
        }, 3000)
    });
}

/**JOBS API CALL */
export function customerList(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(customerData);
        }, 3000)
    });
}