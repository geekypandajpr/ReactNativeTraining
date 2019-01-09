import { JOBHISTORY } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    historyData: [],
    error: false
}

export default jobHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBHISTORY.JOBHISTORY_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case JOBHISTORY.JOBHISTORY_SUCCESS:
            return Object.assign({}, state, {
                historyData : action.historyData,
                isLoading: false
            });
        case JOBHISTORY.JOBHISTORY_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
