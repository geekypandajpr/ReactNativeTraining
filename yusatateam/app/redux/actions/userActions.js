import { USER } from '../common/actionTypes';

// export const loginRequest = (loginCredentials) => {
//     return {
//         type: USER.LOGIN,
//         loginCredentials
//     }
// }

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials })  
}