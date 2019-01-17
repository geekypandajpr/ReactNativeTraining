import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    status: [],
    error: false
}

export default updateStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_STATUS_UPDATE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_STATUS_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                status : action.status,
                isLoading: false
            });
        case SERVICE.SERVICE_STATUS_UPDATE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
