import { ADDJOBSERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: true,
    company: [],
    serviceType:[],
    technician:[],
    error: false
}

export default addjobcompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDJOBSERVICE.ADDJOBCOMPANY_REQUEST:
            return Object.assign({}, state,
                { isLoading: true }
            );
        case ADDJOBSERVICE.ADDJOBCOMPANY_SUCCESS:
            return Object.assign({}, state, {
                companyData: action.companyData,
                serviceType:action.serviceType,
                technician:action.technician,
                isLoading: false
            });
        case ADDJOBSERVICE.ADDJOBCOMPANY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
