import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    sim: [],
    device: [],
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
                device : action.datas.device,
                sim: action.datas.sim,
                isLoading: false
            });
        case SERVICE.SERVICE_DEVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                sim: [],
                device: [],
            });
        default:
            return state;
    }
}