import { SERVICE } from '../../common/actionTypes';

const initialState = {
    isLoading: false,
    company: [],
    serviceType: [],
    technician: [],
    error: false
}

export default companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE.SERVICE_COMPANY_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE.SERVICE_COMPANY_SUCCESS:
            return Object.assign({}, state, {
                company: action.data.company,
                serviceType: action.data.serviceType,
                technician: action.data.technician,
                isLoading: false
            });
        case SERVICE.SERVICE_COMPANY_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: true
            });
        default:
            return state;
    }
}
