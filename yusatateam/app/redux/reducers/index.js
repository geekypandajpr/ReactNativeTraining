import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './SIMREDUCER/simReducer';
import deviceReducer from './deviceReducer';

import customerReducer from './cutomerReducer';
import techReducer from './techReducer';
import searchCriteriaReducer from './searchCriteriaReducer';
import {
    deviceInfoReducer,
    GPSDeviceReducer,
    addGPSDeviceReducer,
    createVehicleTypeReducer,
    createVehicleReducer,
    checkDeviceAssociationReducer,
    vehicleListReducer
} from './GPSDevice';

import {
    createJobReducer,
    jobHistoryReducer,
    jobListReducer,
    addjobcompanyReducer,
    addjobvehicleReducer
    
} from './JobReducer';

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
    checkGPSDeviceAssocData: checkDeviceAssociationReducer,
    createVehicleData: createVehicleReducer,
    vehicleListData: vehicleListReducer,

    /**Sim Info */
    simData: simReducer,

    /**Job Schema */
    CreateData: createJobReducer,
    ListData: jobListReducer,
    HistoryData: jobHistoryReducer,
    addjobcompanyData: addjobcompanyReducer,
    addjobVehicleData:addjobvehicleReducer,

    /**Other */
    devicedata: deviceReducer,
    customersData: customerReducer,
    TechnicianData: techReducer,

    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;