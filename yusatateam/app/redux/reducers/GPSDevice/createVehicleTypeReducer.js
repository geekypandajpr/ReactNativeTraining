import { GPSDEVICE } from '../../common/actionTypes'

const initialState = {
    isLoading: false,
    data: [],
    isFetched: false,
    error: false
}

export default createVehicleTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.CREATE_VEHICLETYPE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isFetched: false
            });
        case GPSDEVICE.CREATE_VEHICLETYPE_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false,
                isFetched: true
            });
        case GPSDEVICE.CREATE_VEHICLETYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                isFetched: false,
                data: [],
            });
        default:
            return state;
    }
}