import { UNINSTALLJOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    unInstallData: [],
    error: false
}

export default UnInstallReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNINSTALLJOBS.UNINSTALLJOBS_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case UNINSTALLJOBS.UNINSTALLJOBS_SUCCESS:
            return Object.assign({}, state, {
                unInstall : action.unInstallData,
                isLoading: false
            });
        case UNINSTALLJOBS.UNINSTALLJOBS_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
