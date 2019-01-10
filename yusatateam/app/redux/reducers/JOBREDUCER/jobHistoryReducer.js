import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    historyData: [],
    error: false
}

export default jobHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_HISTORY_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_HISTORY_SUCCESS:
            return Object.assign({}, state, {
                historyData : action.historyData,
                isLoading: false
            });
        case SERVICE.SERVICE_HISTORY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
