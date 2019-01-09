import {
    USER,
    INSTALLJOBS,
    UNINSTALLJOBS,
    REPAIRJOBS,
    REPLACEJOBS,
    SIM,
    DEVICE,
    CUSTOMER,
    TECHNICIAN,
    GPSDEVICE,
    GPSDEVICESEARCHCRITERIA,

    JOBHISTORY,
    JOBLIST,
    CREATEJOB,
    ADDJOBSERVICE,
    ADDJOBVEHICLE,
} from '../common/actionTypes';

export default {

    deviceRequest: () => ({ type: DEVICE.DEVICE_REQUEST }),
    cutomerFetchRequest: () => ({ type: CUSTOMER.CUSTOMER_FETCH }),
    technicianRequest: () => ({ type: TECHNICIAN.TECHNICIAN_REQUEST }),

    /**Login Request */
    loginRequest: (loginCredentials) => ({ type: USER.LOGIN, loginCredentials }),

    /**Update Schema Request */
    updateSchema: (companyId) => ({ type: USER.UPDATESCHEMA_REQUEST, companyId }),

    /**GPS Device Request */
    gpsdeviceRequest: () => ({ type: GPSDEVICE.GPSDEVICE_REQUEST }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    addGPSDeviceAssociation: (gpsdevice) => ({ type: GPSDEVICE.ADD_GPS_DEVICE_REQUEST, gpsdevice }),
    createVehicleType: () => ({ type: GPSDEVICE.CREATE_VEHICLETYPE_REQUEST }),
    searchCriteria: (filterData) => ({ type: GPSDEVICESEARCHCRITERIA.GPSDEVICESEARCHCRITERIA_REQUEST, filterData }),
    checkGPSDeviceAssociation: (deviceUDID) => ({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, deviceUDID }),
    createVehicle: (AddData) => ({ type: GPSDEVICE.CREATEVEHICLE_REQUEST, AddData }),

    /** */
    simRequest: () => ({ type: SIM.SIM_REQUEST }),


    /**Jobs Schedule */
    installJobRequest: () => ({ type: INSTALLJOBS.INSTALLJOBS_REQUEST }),
    unInstallJobRequest: () => ({ type: UNINSTALLJOBS.UNINSTALLJOBS_REQUEST }),
    replaceJobRequest: () => ({ type: REPLACEJOBS.REPLACEJOBS_REQUEST }),
    repairJobRequest: () => ({ type: REPAIRJOBS.REPAIRJOBS_REQUEST }),

    /**Jobs Schema */
    jobListRequest: () => ({ type: JOBLIST.JOBLIST_REQUEST }),
    createJobRequest: () => ({ type: CREATEJOB.CREATEJOB_REQUEST }),
    jobHistoryRequest: () => ({ type: JOBHISTORY.JOBHISTORY_REQUEST }),
    addserviceRequest: () => ({ type: ADDJOBSERVICE.ADDJOBCOMPANY_REQUEST }),
    addJobvehicleRequest: () => ({ type: ADDJOBVEHICLE.ADDJOBVEHICLE_REQUEST }),

}