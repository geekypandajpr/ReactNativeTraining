import { GPSDEVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default gpsDeviceListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GPSDEVICE.GPSDEVICE_LIST_REQUEST :
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.GPSDEVICE_LIST_SUCCESS :
            return Object.assign({}, state, {
                data: action.list,
                isLoading: false
            });
        case GPSDEVICE.GPSDEVICE_LIST_FAILED :
            return Object.assign({}, state, {
                data: [],
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}