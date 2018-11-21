import { USER } from '../common/actionTypes';
// export const loginRequest = (loginCredentials) => { type: USER.FETCHING_DATA, loginCredentials }

export function loginRequest(loginCredentials) {
    return {
        type: USER.FETCHING_DATA,
        loginCredentials
    }
}