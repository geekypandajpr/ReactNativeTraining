import Api from '../common/api';
import { SERVICE } from '../common/urls';

export const createJob = (createdata) => Api.post(SERVICE.SERVICE_ADD, createdata);
export const getCompany = () => Api.get(SERVICE.SERVICE_COMPANY);
export const getVehicle = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const getTechnician = (userRole) => Api.post(SERVICE.SERVICE_TECHNICIAN, userRole);
export const getServiceType = () => Api.get(SERVICE.SERVICE_TYPE);
export const getServiceList = (serviceType) => Api.get(SERVICE.SERVICE_LIST+`?type=${serviceType}`);
export const getServiceHistory = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const excecuteService = () => Api.post(SERVICE.EXECUTE_SERVICE);
export const serviceStatus = () => Api.get(SERVICE.SERVICE_STATUS);
export const devices = () => Api.get(SERVICE.SERVICE_DEVICE);
export const sims = () => Api.get(SERVICE.SERVICE_SIM);

 
export default jobServices = {
    createJob,
    getCompany,
    getVehicle,
    getServiceType,
    getTechnician,
    getServiceList,
    getServiceHistory,
    excecuteService,
    serviceStatus,
    devices,
    sims
}