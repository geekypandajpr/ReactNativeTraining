import { GPSDEVICE } from '../../common/actionTypes';
const initialState = {
    isLoading: true,
    countryISD: [],
    deviceType: [],
    //vehicleList : [],
    error: false
}

export default gpsDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GPSDEVICE.GPSDEVICE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GPSDEVICE.GPSDEVICE_SUCCESS:
            return Object.assign({}, state, {
                countryISD: action.datas.countryISD,
                deviceType: action.datas.deviceType,
                //vehicleList : action.datas.vehicleList,
                isLoading: false
            });
        case GPSDEVICE.GPSDEVICE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}