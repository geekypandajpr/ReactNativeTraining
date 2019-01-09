import { JOBLIST } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    listData: [],
    error: false
}

export default JobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBLIST.JOBLIST_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case JOBLIST.JOBLIST_SUCCESS:
            return Object.assign({}, state, {
                listData : action.listData,
                isLoading: false
            });
        case JOBLIST.JOBLIST_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
