import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    createData: [],
    error: false
}

export default createJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.CREATEJOB_REQUEST:
            return Object.assign({}, state, {
                isLoading: true 
            });
        case SERVICE.CREATEJOB_SUCCESS:
            return Object.assign({}, state, {
                createData : action.createData,
                isLoading: false
            });
        case SERVICE.CREATEJOB_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
