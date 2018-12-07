import Api from '../common/api';
import { USER } from '../common/urls';
import loginData from '../../assets/JSONData/loginData';
import SimData from '../../assets/JSONData/SimData';
import pendingData from '../../assets/JSONData/JobsData/pendingData';
import DeviceData from '../../assets/JSONData/DeviceData';
import customersData from '../../assets/JSONData/customerData';
import vehiclesData from '../../assets/JSONData/VehicleDetail';

export const login = data => Api.post(USER.LOGIN, data);

export default userService = {
    login,
    doLogin,
    simlogin,
    devicelogin,
    jobPendingData,
    customerList,
    vehicleList
}

/**LOGIN API CALL */
export function doLogin(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(loginData);
        }, 3000)
    });
}

/**SIM API CALL */
export function simlogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(SimData);
        }, 3000)
    });
}

/**DEVICE API CALL */
export function devicelogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(DeviceData);
        }, 3000)
    });
}

/**CUSTOMER API CALL */
export function customerList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(customersData);
        }, 3000)
    });
}

/**VEHICLE LIST API CALL */
export function vehicleList(customer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(vehiclesData);
        }, 3000)
    });
}

/**JOBS API CALL */
export function jobPendingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(pendingData);
        }, 3000)
    });
}

