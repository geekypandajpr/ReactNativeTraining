import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    DefectiveSim : [], 
    ReplaceSim : [], 
    DefectiveDevice : [], 
    ReplaceDevice : [],
    error: false
}

export default simDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_DEVICE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_DEVICE_SUCCESS:
            return Object.assign({}, state, {
                DefectiveSim : action.DefectiveSim, 
                ReplaceSim : action.ReplaceSim, 
                DefectiveDevice : action.DefectiveDevice, 
                ReplaceDevice : action.ReplaceDevice,
                isLoading: false
            });
        case SERVICE.SERVICE_DEVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
            });
        default:
            return state;
    }
}