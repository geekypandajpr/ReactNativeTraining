import { TECHNICIAN } from '../common/actionTypes';


const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default simReducer = (state = initialState, action) => {
    switch (action.type) {
        case TECHNICIAN.TECHNICIAN_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case TECHNICIAN.TECHNICIAN_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
            });
        case TECHNICIAN.TECHNICIAN_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data : [],
            });
        default:
            return state;
    }
}
