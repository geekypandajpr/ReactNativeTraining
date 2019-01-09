import { CREATEJOB } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    createData: [],
    error: false
}

export default createJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEJOB.CREATEJOB_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case CREATEJOB.CREATEJOB_SUCCESS:
            return Object.assign({}, state, {
                createData : action.createData,
                isLoading: false
            });
        case CREATEJOB.CREATEJOB_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
