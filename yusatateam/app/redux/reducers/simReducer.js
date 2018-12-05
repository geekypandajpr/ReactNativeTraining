import { USER } from '../common/actionTypes';

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default simReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.SIM_lOGIN:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case USER.SIM_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
            });
        case USER.SIM_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
