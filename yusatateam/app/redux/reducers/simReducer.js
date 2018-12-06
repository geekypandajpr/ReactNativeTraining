import { SIM } from '../common/actionTypes';

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default simReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIM.SIM_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SIM.SIM_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
            });
        case SIM.SIM_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data : [],
            });
        default:
            return state;
    }
}
