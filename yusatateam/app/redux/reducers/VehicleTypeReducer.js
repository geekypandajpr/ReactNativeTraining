import { CREATEVEHICLETYPE } from '../common/actionTypes'

const initialState = {
    isLoading: false,
    data: [],
    isFetched: false,
    error: false
}

export default VehicleTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                isFetched: false
            });
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false,
                isFetched: true
            });
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                isFetched: false,
                data : [],
            });
        default:
            return state;
    }
}