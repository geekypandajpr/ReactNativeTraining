import { USER } from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }) ,
    simRequest : () =>({ type: USER.SIM_lOGIN })
}