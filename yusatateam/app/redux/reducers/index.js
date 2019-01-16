import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import * as GPSDevice from './GPSDevice';
import * as JobReducer from './JobReducer';

import simReducer from './SIMREDUCER/simReducer';
import deviceReducer from './deviceReducer';
import customerReducer from './cutomerReducer';
import techReducer from './techReducer';

const rootReducers = combineReducers({
    /**Router */
    nav                     : navReducer,

    /**Login */
    loginData               : userReducer,

    /**GPS Device Association */
    gpsDeviceData           : GPSDevice.GPSDeviceReducer,
    deviceInfo              : GPSDevice.deviceInfoReducer,
    addGPSDeviceData        : GPSDevice.addGPSDeviceReducer,
    createVehicleTypeData   : GPSDevice.createVehicleTypeReducer,
    checkGPSDeviceAssocData : GPSDevice.checkDeviceAssociationReducer,
    createVehicleData       : GPSDevice.createVehicleReducer,
    vehicleListData         : GPSDevice.vehicleListReducer,
    gpsDeviceListData       : GPSDevice.gpsDeviceListReducer,

    /**Job Schema */
    createJobData           : JobReducer.createJobReducer,
    serviceListData         : JobReducer.jobListReducer,
    serviceHistoryData      : JobReducer.jobHistoryReducer,
    serviceCompanyData      : JobReducer.companyReducer,
    executeServiceData      : JobReducer.executeServiceReducer,
    serviceStatus           : JobReducer.serviceStatusReducer,
    simDeviceData           : JobReducer.simDeviceReducer,

    /**Sim Info */
    simData                 : simReducer,

    /**Other */
    devicedata              : deviceReducer,
    customersData           : customerReducer,
    TechnicianData          : techReducer,

    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;