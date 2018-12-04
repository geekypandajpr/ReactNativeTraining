import { USER } from  '../common/actionTypes';

const initialState = {
    isLoading: false,
    data: {},
    error: false
}

export default loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER.LOGIN :
            return Object.assign({}, state, {
                isLoading: false
            });
        case USER.LOGIN_SUCCESS :
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case USER.LOGIN_FAILED :
            return Object.assign({}, state, {
                data: {},
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}