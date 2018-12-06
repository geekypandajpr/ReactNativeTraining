import { CUSTOMER } from  '../common/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default customerReducer = (state = initialState, action) => {
    switch(action.type) {
        case CUSTOMER.CUSTOMER_FETCH :
            return Object.assign({}, state, {
                isLoading: true
            });
        case CUSTOMER.CUSTOMER_SUCCESS :
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case CUSTOMER.CUSTOMER_FAILED :
            return Object.assign({}, state, {
                data: {},
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}