import { GPSDEVICELISTDATA } from '../common/actionTypes';

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default gpsDeviceListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICELISTDATA.GPSDEVICELISTDATA_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICELISTDATA.GPSDEVICELISTDATA_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
            });
        case GPSDEVICELISTDATA.GPSDEVICELISTDATA_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data : [],
            });
        default:
            return state;
    }
}
