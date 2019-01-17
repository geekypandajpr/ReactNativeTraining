import Api from '../common/api';
import { SERVICE } from '../common/urls';

export const createJob = (createdata) => Api.post(SERVICE.SERVICE_ADD, createdata);
export const getCompany = () => Api.get(SERVICE.SERVICE_COMPANY);
export const getVehicle = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const getTechnician = (userRole) => Api.post(SERVICE.SERVICE_TECHNICIAN, userRole);
export const getServiceType = () => Api.get(SERVICE.SERVICE_TYPE);
export const getServiceList = (serviceType) => Api.get(SERVICE.SERVICE_LIST+`?type=${serviceType}`);
export const getServiceHistory = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const excecuteService = (inventoryRequest) => Api.post(SERVICE.EXECUTE_SERVICE,inventoryRequest);
export const serviceStatus = () => Api.get(SERVICE.SERVICE_STATUS);
export const devices = (request1) => Api.post(SERVICE.SERVICE_DEVICE,request1);
export const sims = (request) => Api.post(SERVICE.SERVICE_SIM,request);
export const updateStatus = (status) => Api.put(SERVICE.SERVICE_STATUS_UPDATE, status);

 
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
    sims,
    updateStatus
}