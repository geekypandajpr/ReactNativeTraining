import { JOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    replaceData: [],
    error: false
}

export default ReplaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBS.JOBS_LOGIN:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case JOBS.JOBS_SUCCESS:
            return Object.assign({}, state, {
                replace : action.replaceData,
                isLoading: false
            });
        case JOBS.JOBS_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
