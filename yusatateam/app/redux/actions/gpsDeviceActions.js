import { GPSDEVICE } from '../common/actionTypes';

export default {
    gpsdeviceRequest: (deviceReq, simReq, companyId) => ({ type: GPSDEVICE.GPSDEVICE_REQUEST, deviceReq, simReq, companyId }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    addGPSDeviceAssociation: (gpsdevice) => ({ type: GPSDEVICE.ADD_GPS_DEVICE_REQUEST, gpsdevice }),
    createVehicleType: () => ({ type: GPSDEVICE.CREATE_VEHICLETYPE_REQUEST }),
    gpsDeviceList: (listRequest) => ({ type: GPSDEVICE.GPSDEVICE_LIST_REQUEST, listRequest }),
    freeVehicelList: (companyId) => ({ type: GPSDEVICE.GPSDEVICEVEHICLELIST_REQUEST, companyId}),
    checkGPSDeviceAssociation: (deviceUDID) => ({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, deviceUDID }),
    createVehicle: (AddData) => ({ type: GPSDEVICE.CREATEVEHICLE_REQUEST, AddData })
}