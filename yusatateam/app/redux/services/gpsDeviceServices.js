import Api from '../common/api';
import { GPSDEVICE } from '../common/urls';

export const gpsDeviceCountryIsd = () => Api.get(GPSDEVICE.COUNTRYISD);
export const gpsDeviceType = () => Api.get(GPSDEVICE.DEVICETYPE);
export const gpsvehicleList = () => Api.get(GPSDEVICE.VEHICLELIST);
export const addGPSDevice = (gpsdevice) => Api.post(GPSDEVICE.FORMSUBMIT, gpsdevice);
export const associationDeviceInfo = (deviceUDID) => Api.get(GPSDEVICE.ASSOCIATIONDEVICEINFO + `?udid=${deviceUDID}`);
export const gpsDeviceList = (listRequest) => Api.post(GPSDEVICE.GPSDEVICELIST, listRequest);
export const createVehicleType = () => Api.get(GPSDEVICE.CREATEVEHICLETYPE);
export const checkGPSDeviceAssociation = (deviceUDID) => Api.get(GPSDEVICE.CHECKDEVICEASSOCIATION + `?udid=${deviceUDID}`);
export const createVehicle = (AddData) => Api.post(GPSDEVICE.CREATEVEHICLE, AddData);


export default gpsDeviceServices = {
    gpsDeviceCountryIsd,
    gpsDeviceType,
    gpsvehicleList,
    addGPSDevice,
    associationDeviceInfo,
    gpsDeviceList,
    createVehicleType,
    checkGPSDeviceAssociation,
    createVehicle
}