import Api from '../common/api';
import { SERVICE } from '../common/urls';

export const createJob = (createdata) => Api.post(SERVICE.SERVICE_ADD,createdata);
export const getCompany = () => Api.get(SERVICE.SERVICE_COMPANY);
export const getVehicle = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const getTechnician = () => Api.get(SERVICE.SERVICE_TECHNICIAN);
export const getServiceType = () => Api.get(SERVICE.SERVICE_TYPE);
export const getServiceList = () => Api.get(SERVICE.SERVICE_LIST);
export const getServiceHistory = () => Api.get(SERVICE.SERVICE_VEHICLE);
export const excecuteService = () => Api.post(SERVICE.EXECUTE_SERVICE)
 
export default jobServices = {
    createJob,
    getCompany,
    getVehicle,
    getServiceType,
    getTechnician,
    getServiceList,
    getServiceHistory,
    excecuteService
}