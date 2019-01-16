import { GPSDEVICE } from '../common/actionTypes';

export default {
    gpsdeviceRequest: () => ({ type: GPSDEVICE.GPSDEVICE_REQUEST }),
    getAssociationDeviceInfo: (deviceUDID) => ({ type: GPSDEVICE.DEVICEINFO_REQUEST, deviceUDID }),
    addGPSDeviceAssociation: (gpsdevice) => ({ type: GPSDEVICE.ADD_GPS_DEVICE_REQUEST, gpsdevice }),
    createVehicleType: () => ({ type: GPSDEVICE.CREATE_VEHICLETYPE_REQUEST }),
    gpsDeviceList: (listRequest) => ({ type: GPSDEVICE.GPSDEVICE_LIST_REQUEST, listRequest }),
    checkGPSDeviceAssociation: (deviceUDID) => ({ type: GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST, deviceUDID }),
    createVehicle: (AddData) => ({ type: GPSDEVICE.CREATEVEHICLE_REQUEST, AddData })
}