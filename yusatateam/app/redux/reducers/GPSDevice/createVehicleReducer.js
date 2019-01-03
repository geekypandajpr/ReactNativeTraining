import { GPSDEVICE } from '../../common/actionTypes'

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default createVehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.CREATEVEHICLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.CREATEVEHICLE_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case GPSDEVICE.CREATEVEHICLE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data: [],
            });
        default:
            return state;
    }
}
