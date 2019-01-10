import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    listData: [],
    error: false
}

export default JobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_LIST_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_LIST_SUCCESS:
            return Object.assign({}, state, {
                listData : action.listData,
                isLoading: false
            });
        case SERVICE.SERVICE_LIST_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
