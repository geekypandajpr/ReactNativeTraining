import { CREATEVEHICLETYPE } from '../common/actionTypes'

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default deviceInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
               
            });
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
                
            });
        case CREATEVEHICLETYPE.CREATEVEHICLETYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data : [],
            });
        default:
            return state;
    }
}