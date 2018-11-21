import { USER } from '../common/actionTypes';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function userReducers (state = initialState, action) {
    switch(action.type) {
        case USER.FETCHING_DATA:
            return Object.assign({}, state, {
                data: [],
                isFetching: true,
            });
        case USER.FETCHING_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        case USER.FETCHING_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        default:
            return state;
    }
}