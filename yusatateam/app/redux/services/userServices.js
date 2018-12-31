import Api from '../common/api';
import { USER } from '../common/urls';
import loginData from '../../assets/JSONData/loginData';
import SimData from '../../assets/JSONData/SimData';
import JobsData from '../../assets/JSONData/JobsData/JobsData';
import DeviceData from '../../assets/JSONData/DeviceData';
import customersData from '../../assets/JSONData/customerData';
import TechnicianData from '../../assets/JSONData/TechnicianData';
import CompanyData from '../../assets/JSONData/GpsDevice/CompanyData';
import DeviceValue from '../../assets/JSONData/GpsDevice/DeviceData'

export const login = data => Api.post(USER.LOGIN, data);
export const gpsDeviceCountryIsd = () => Api.get(USER.COUNTRYISD);
export const gpsDeviceType = () => Api.get(USER.DEVICETYPE);
export const gpsvehicleList = () => Api.get(USER.VEHICLELIST);
export const updateSchema = (companyId) => Api.post(USER.UPDATESCHEMA + `?companyId=${companyId}`, null);
export const addGPSDevice = (gpsdevice) => Api.post(USER.FORMSUBMIT, gpsdevice);
export const associationDeviceInfo = (deviceUDID) => Api.get(USER.ASSOCIATIONDEVICEINFO + `?udid=${deviceUDID}`);
export const searchCriteria = (filterData) => Api.post(USER.GPSDEVICESEARCHCRITERIA, filterData);
export const createVehicleType = () => Api.get(USER.CREATEVEHICLETYPE);
export const checkGPSDeviceAssociation = (deviceUDID) => Api.get(USER.CHECKDEVICEASSOCIATION + `?udid=${deviceUDID}`);
export const createVehicle = (AddData) => Api.post(USER.CREATEVEHICLE, AddData);

export default userService = {
    /**Login Service */
    login,

    /**Update Schema Service */
    updateSchema,

    /**GPS Device Association Service */
    gpsDeviceCountryIsd,
    gpsDeviceType,
    gpsvehicleList,
    addGPSDevice,
    searchCriteria,
    checkGPSDeviceAssociation,
    associationDeviceInfo,
    createVehicleType,
    createVehicle,

    doLogin,
    simlogin,
    devicelogin,
    jobPendingData,
    deviceValue,
    customerList,
    technicianLogin,
    gpslogin,

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

/**TECHNICIAN LIST API CALL */
export function technicianLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(TechnicianData);
        }, 3000)
    });
}

/**JOBS API CALL */
export function jobPendingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(JobsData);
        }, 3000)
    });
}
/**GPSDEVICE LIST API CALL */
export function gpslogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(CompanyData);
        }, 3000)
    });
}

export function deviceValue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(DeviceValue);
        }, 3000)
    });
}

// export function jobCompletedData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(completedData);
//         }, 3000)
//     });
// }

// export function jobRescheduleData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(reScheduleData);
//         }, 3000)
//     });
// }

