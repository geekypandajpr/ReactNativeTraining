import { ADDJOBVEHICLE } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    jobvehicle: [],
    error: false
}

export default addjobvehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDJOBVEHICLE.ADDJOBVEHICLE_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case ADDJOBVEHICLE.ADDJOBVEHICLE_SUCCESS:
            return Object.assign({}, state, {
                jobvehicle: action.jobvehicle,
                isLoading: false
            });
        case ADDJOBVEHICLE.ADDJOBVEHICLE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
