import { DEVICE } from "../common/actionTypes";


const initialvalue = {
    data : [],
    error : false,
    isLoading : false
}

export default deviceReducer = (state = initialvalue, action) => {
    switch(action.type){
    case DEVICE.DEVICE_REQUEST:
        return Object.assign({}, state, {
            isLoading: true
        });
    case DEVICE.DEVICE_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false,
            data : action.data
        });
    case DEVICE.DEVICE_FAILED:
        return Object.assign({}, state, {
            isLoading: false,
            data : [],
            error:true
        });
    default:
        return state;
    }
}
