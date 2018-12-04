import Api from '../common/api';
import { USER } from '../common/urls';
import loginData from '../../assets/JSONData/loginData';

export const login = data => Api.post(USER.LOGIN, data);

export default userService = {
    login,
    doLogin
}

//LOGIN API CALL
export function doLogin(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(loginData);
        }, 5000)
    });
}