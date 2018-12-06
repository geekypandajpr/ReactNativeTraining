import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './simReducer';
import deviceReducer from './deviceReducer';
import jobReducer from './jobReducer';

const rootReducers = combineReducers({
    nav: navReducer,
    loginData : userReducer,
    simData   : simReducer,
    JobData  :  jobReducer,
    devicedata : deviceReducer 
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;