import { JOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    repairData: [],
    error: false
}

export default RepairReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBS.JOBS_LOGIN:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case JOBS.JOBS_SUCCESS:
            return Object.assign({}, state, {
                repair : action.repairData,
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
