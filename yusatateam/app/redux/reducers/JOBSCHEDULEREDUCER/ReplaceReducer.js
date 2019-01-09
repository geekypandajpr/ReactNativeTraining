import { REPLACEJOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    replaceData: [],
    error: false
}

export default ReplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPLACEJOBS.REPLACEJOBS_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case REPLACEJOBS.REPLACEJOBS_SUCCESS:
            return Object.assign({}, state, {
                replace : action.replaceData,
                isLoading: false
            });
        case REPLACEJOBS.REPLACEJOBS_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
