import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    jobvehicle: [],
    error: false
}

export default vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_VEHICLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true 
            });
        case SERVICE.SERVICE_VEHICLE_SUCCESS:
            return Object.assign({}, state, {
                jobvehicle: action.jobvehicle,
                isLoading: false
            });
        case SERVICE.SERVICE_VEHICLE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
