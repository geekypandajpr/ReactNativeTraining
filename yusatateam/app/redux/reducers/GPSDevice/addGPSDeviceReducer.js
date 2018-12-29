import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    data: [],
    error: false,
    isLoading: false
}

export default addGPSDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.ADD_GPS_DEVICE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            })
        case GPSDEVICE.ADD_GPS_DEVICE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })
        case GPSDEVICE.ADD_GPS_DEVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data: []
            })
        default:
            return state;
    }
}