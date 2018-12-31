import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './simReducer';
import deviceReducer from './deviceReducer';
import jobReducer from './jobReducer';
import customerReducer from './cutomerReducer';
import techReducer from './techReducer';
import searchCriteriaReducer from './searchCriteriaReducer';
import AddgpsvehicleReducer from './AddgpsvehicleReducer'
import {
    deviceInfoReducer,
    GPSDeviceReducer,
    addGPSDeviceReducer,
    createVehicleTypeReducer,
    checkDeviceAssociationReducer
} from './GPSDevice';

const rootReducers = combineReducers({
    /**Router */
    nav: navReducer,

    /**Login */
    loginData: userReducer,

    /**GPS Device Association */
    gpsDeviceData: GPSDeviceReducer,
    deviceInfo: deviceInfoReducer,
    addGPSDeviceData: addGPSDeviceReducer,
    searchList: searchCriteriaReducer,
    addgpsVehicleData: AddgpsvehicleReducer,
    createVehicleTypeData: createVehicleTypeReducer,
    checkGPSDeviceData: checkDeviceAssociationReducer,

    /**Others */
    simData: simReducer,
    JobData: jobReducer,
    devicedata: deviceReducer,
    customersData: customerReducer,
    TechnicianData: techReducer,

    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;