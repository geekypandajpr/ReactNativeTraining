import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    isChecked: false,
    deviceUdid: [],
    error: false
}

export default checkDeviceAssociationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isChecked: false,
            });
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_SUCCESS:
            return Object.assign({}, state, {
                deviceUdid : action.data,
                isLoading: false,
                isChecked: true
            });
        case GPSDEVICE.CHECK_DEVICE_ASSOCIATION_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                isChecked: false,
                deviceUdid: []
            });
        default:
            return state;
    }
}