import { USER } from '../common/actionTypes';

export const loginRequest = (loginCredentials) => {
    return {
        type: USER.FETCHING_DATA,
        loginCredentials
    }
}