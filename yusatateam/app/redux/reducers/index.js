import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './simReducer';
import deviceReducer from './deviceReducer';
import jobReducer from './jobReducer';
import customerReducer from './cutomerReducer';
import vehicleReducer from './vehicleReducer';
import techReducer from './techReducer';
import  gpsDeviceReducer from './gpsDeviceReducer'

const rootReducers = combineReducers({
    nav: navReducer,
    loginData : userReducer,
    simData   : simReducer,
    JobData  :  jobReducer,
    devicedata : deviceReducer,
    customersData: customerReducer,
    vehicleData: vehicleReducer,
    TechnicianData : techReducer,
    CompanyData : gpsDeviceReducer

    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;