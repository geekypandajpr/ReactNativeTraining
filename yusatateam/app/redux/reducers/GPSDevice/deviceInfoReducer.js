import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    isFetched: false,
    deviceInfo: {},
    error: false
}

export default deviceInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.DEVICEINFO_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isFetched: false,
            });
        case GPSDEVICE.DEVICEINFO_SUCCESS:
            return Object.assign({}, state, {
                deviceInfo : action.deviceInfo,
                isLoading: false,
                isFetched: true
            });
        case GPSDEVICE.DEVICEINFO_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                isFetched: false,
                deviceInfo: {}
            });
        default:
            return state;
    }
}