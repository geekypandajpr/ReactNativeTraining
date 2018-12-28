import { CREATEVEHICLE } from '../../common/actionTypes';

const initialState = {
    data: [],
    error: false,
    isLoading: true
}

export default submitForm = (state = initialState, action) => {
    switch (action.type) {
        case CREATEVEHICLE.CREATEVEHICLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            })
        case CREATEVEHICLE.CREATEVEHICLE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            })
        case CREATEVEHICLE.CREATEVEHICLE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                data: []
            })
        default:
            return state;

    }
}