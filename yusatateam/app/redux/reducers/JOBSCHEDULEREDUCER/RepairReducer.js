import { REPAIRJOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    repairData: [],
    error: false
}

export default RepairReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPAIRJOBS.REPAIRJOBS_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case REPAIRJOBS.REPAIRJOBS_SUCCESS:
            return Object.assign({}, state, {
                repair : action.repairData,
                isLoading: false
            });
        case REPAIRJOBS.REPAIRJOBS_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
