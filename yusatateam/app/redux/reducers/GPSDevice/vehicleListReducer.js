import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    vehicleList : [],
    error: false
}

export default vehicleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.GPSDEVICEVEHICLELIST_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.GPSDEVICEVEHICLELIST_SUCCESS:
            return Object.assign({}, state, {
                vehicleList : action.vehicleList,
                isLoading: false
            });
        case GPSDEVICE.GPSDEVICEVEHICLELIST_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}