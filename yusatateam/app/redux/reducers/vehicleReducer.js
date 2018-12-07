import { VEHICLE } from  '../common/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default vehicleReducer = (state = initialState, action) => {
    switch(action.type) {
        case VEHICLE.VEHICLE_FETCH :
            return Object.assign({}, state, {
                isLoading: true
            });
        case VEHICLE.VEHICLE_SUCCESS :
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case VEHICLE.VEHICLE_FAILED :
            return Object.assign({}, state, {
                data: [],
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}