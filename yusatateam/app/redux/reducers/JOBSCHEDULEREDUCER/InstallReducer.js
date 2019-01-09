import { INSTALLJOBS } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    installData: [],
    error: false
}

export default InstallReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTALLJOBS.INSTALLJOBS_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case INSTALLJOBS.INSTALLJOBS_SUCCESS:
            return Object.assign({}, state, {
                install : action.installData,
                isLoading: false
            });
        case INSTALLJOBS.INSTALLJOBS_FAILED:
            return Object.assign({}, state, {
                
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
