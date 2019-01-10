import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    status: [],
    error: false
}

export default ServiceStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_STATUS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_STATUS_SUCCESS:
            return Object.assign({}, state, {
                status : action.status,
                isLoading: false
            });
        case SERVICE.SERVICE_STATUS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
