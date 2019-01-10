import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    executedData: [],
    error: false
}

export default executeServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.EXECUTE_SERVICE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true 
            });
        case SERVICE.EXECUTE_SERVICE_SUCCESS:
            return Object.assign({}, state, {
                executedData : action.data,
                isLoading: false
            });
        case SERVICE.EXECUTE_SERVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}