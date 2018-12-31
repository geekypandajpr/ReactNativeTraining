import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './SIMREDUCER/simReducer';
import deviceReducer from './deviceReducer';
import jobReducer from './jobReducer';
import customerReducer from './cutomerReducer';
import techReducer from './techReducer';
import searchCriteriaReducer from './searchCriteriaReducer';
import {
    deviceInfoReducer,
    GPSDeviceReducer,
    addGPSDeviceReducer,
    createVehicleTypeReducer,
    createVehicleReducer,
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
    createVehicleTypeData: createVehicleTypeReducer,
    checkGPSDeviceData: checkDeviceAssociationReducer,
    createVehicleData: createVehicleReducer,

    /**Sim Info */
    simData: simReducer,

    /**Others */
    JobData: jobReducer,
    devicedata: deviceReducer,
    customersData: customerReducer,
    TechnicianData: techReducer,

    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;