import { UPDATESCHEMA } from  '../common/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export default updateSchema = (state = initialState, action) => {
    switch(action.type) {
        case UPDATESCHEMA.UPDATESCHEMA_REQUEST :
            return Object.assign({}, state, {
                isLoading: true
            });
        case UPDATESCHEMA.UPDATESCHEMA_SUCCESS :
            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        case UPDATESCHEMA.UPDATESCHEMA_FAILED :
            return Object.assign({}, state, {
                data: [],
                isLoading: false,
                error: true
            });
        default :
            return state;
    }
}