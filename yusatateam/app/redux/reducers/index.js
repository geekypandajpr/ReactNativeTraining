import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './simReducer';
import deviceReducer from './deviceReducer';
import jobReducer from './jobReducer';
import customerReducer from './cutomerReducer';
import vehicleReducer from './vehicleReducer';
import techReducer from './techReducer';
import updateSchemaReducer from './updateSchemaReducer';
//import submitFormReducer from './submitFormReducer';
import searchCriteriaReducer from './searchCriteriaReducer';
import { deviceInfoReducer, GPSDeviceReducer, submitFormReducer } from './GPSDevice';

const rootReducers = combineReducers({
    nav: navReducer,
    loginData: userReducer,
    simData: simReducer,
    JobData: jobReducer,
    devicedata: deviceReducer,
    customersData: customerReducer,
    vehicleData: vehicleReducer,
    TechnicianData: techReducer,
    gpsDeviceData: GPSDeviceReducer,
    deviceInfo: deviceInfoReducer,
    updatedSchema: updateSchemaReducer,
    submitFormData: submitFormReducer,
    searchList: searchCriteriaReducer
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;