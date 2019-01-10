import Api from '../common/api';
import { SERVICE } from '../common/urls';

export const createJob = () => Api.post(SERVICE.SERVICE_ADD);
export const getCompany = () => Api.get(USER.COUNTRYISD);
export const getVehicle = () => Api.get(USER.DEVICETYPE);
export const getTechnician = () => Api.get(USER.VEHICLELIST);
export const getServiceType = () => Api.get(USER.VEHICLELIST);
export const getServiceList = () => Api.get(USER.DEVICETYPE);
export const getServiceHistory = () => Api.get(USER.VEHICLELIST);

export default jobServices = {
    createJob,
    getCompany,
    getVehicle,
    getServiceType,
    getTechnician,
    getServiceList,
    getServiceHistory
}