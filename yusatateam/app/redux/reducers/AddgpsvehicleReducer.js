import {ADDGPSVEHICLE} from '../common/actionTypes'

const initialState = {
    isLoading: true,
    data: [],
    error: false
}

export default AddgpsvehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDGPSVEHICLE.ADDGPSVEHICLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case ADDGPSVEHICLE.ADDGPSVEHICLE_SUCCESS:
            return Object.assign({}, state, {
                data : action.data,
                isLoading: false
            });
        case ADDGPSVEHICLE.ADDGPSVEHICLE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data : [],
            });
        default:
            return state;
    }
}
