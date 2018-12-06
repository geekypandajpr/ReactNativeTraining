import Api from '../common/api';
import { USER } from '../common/urls';
import loginData from '../../assets/JSONData/loginData';
import SimData from '../../assets/JSONData/SimData';
import VehicleDetail from '../../assets/JSONData/VehicleDetail';
import DeviceData from '../../assets/JSONData/DeviceData'

export const login = data => Api.post(USER.LOGIN, data);

export default userService = {
    login,
    doLogin,
    simlogin,
    jobPendingData,
}

/**LOGIN API CALL */
export function doLogin(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(loginData);
        }, 3000)
    });
}

/**SIM DEVICE API CALL */
export function simlogin(req){
    if(req.orderCode=='sim'){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(SimData);
            }, 3000)
        });
    } else if(req.orderCode=='device'){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(DeviceData);
            }, 3000)
        });
    }
   
}

/**JOBS API CALL */
export function jobPendingData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(VehicleDetail);
        }, 3000)
    });
}

