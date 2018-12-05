import { JOBS } from '../common/actionTypes';

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBS.JOBS_LOGIN:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case JOBS.JOBS_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
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
