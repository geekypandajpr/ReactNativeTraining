import { USER, JOBS, SIM } from '../common/actionTypes';

export default {
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }) ,
    simRequest : () =>({ type: SIM.SIM_REQUEST }),
    jobRequest : () => ({ type : JOBS.JOBS_LOGIN })
}