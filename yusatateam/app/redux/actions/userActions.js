import { USER } from '../common/actionTypes';
export const loginRequest = loginCredentials => { type: USER.LOGIN, loginCredentials }