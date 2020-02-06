import Api from '../common/api';
import { SERVICE } from '../common/urls';

export const createJob = (createdata) => Api.post(SERVICE.SERVICE_ADD, createdata);
export const getCompany = () => Api.get(SERVICE.SERVICE_COMPANY);
export const getVehicle = (companyId) => Api.get(SERVICE.SERVICE_VEHICLE + `?idsForList=${companyId}`);
export const getTechnician = (userRole) => Api.post(SERVICE.SERVICE_TECHNICIAN, userRole);
export const getServiceType = () => Api.get(SERVICE.SERVICE_TYPE);
export const getServiceList = (serviceType) => Api.get(SERVICE.SERVICE_LIST+`?type=${serviceType}`);
export const getServiceHistory = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const excecuteService = (inventoryRequest) => Api.post(SERVICE.EXECUTE_SERVICE,inventoryRequest);
export const serviceStatus = () => Api.get(SERVICE.SERVICE_STATUS);
export const defectiveDevice = (defectiveDevice) => Api.post(SERVICE.SERVICE_DEVICE_SIM, defectiveDevice);
export const defectiveSim = (defectiveSim) => Api.post(SERVICE.SERVICE_DEVICE_SIM, defectiveSim);
export const replaceDevice = (replaceDevice) => Api.post(SERVICE.SERVICE_DEVICE_SIM, replaceDevice);
export const replaceSim= (replaceSim) => Api.post(SERVICE.SERVICE_DEVICE_SIM, replaceSim);
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
    replaceSim,
    replaceDevice,
    defectiveSim,
    defectiveDevice,
    updateStatus
}