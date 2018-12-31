import { GPSDEVICE } from '../../common/actionTypes'

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default AddgpsvehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.CREATEVEHICLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.CREATE_VEHICLETYPE_SUCCESS:
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
