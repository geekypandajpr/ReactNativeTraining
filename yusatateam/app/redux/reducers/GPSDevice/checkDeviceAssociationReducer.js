import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    isValid : false,
    deviceUdid: [],
    error: false
}

export default checkDeviceAssociationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isValid: false
            });
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_SUCCESS:
            return Object.assign({}, state, {
                deviceUdid : action.data,
                isLoading: false,
                isValid: true
            });
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                isValid: false,
                deviceUdid: []
            });
        default:
            return state;
    }
}