import { GPSDEVICE,GPSDEVICEDATA,GPSDEVICECOUNTRYISD} from '../common/actionTypes';

const initialState = {
    isLoading: true,
    data1: [],
    data2 : [],
    data3 : [],
    error: false
}

export default gpsDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.GPSDEVICE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.GPSDEVICE_SUCCESS:
            return Object.assign({}, state, {
                data1 : action.data1,
                isLoading: false
            });
        case GPSDEVICE.GPSDEVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data1 : [],
            });
        case GPSDEVICEDATA.GPSDEVICEDATA_SUCCESS:
            return Object.assign({}, state, {
                data2 : action.data2,
                isLoading: false
            });
        case GPSDEVICEDATA.GPSDEVICEDATA_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data2 : [],
            });
            case GPSDEVICECOUNTRYISD.GPSDEVICECOUNTRYISD_SUCCESS:
            return Object.assign({}, state, {
                data3 : action.data3,
                isLoading: false
            });
        case GPSDEVICECOUNTRYISD.GPSDEVICECOUNTRYISD_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data3 : [],
            });
        default:
            return state;
    }
}
