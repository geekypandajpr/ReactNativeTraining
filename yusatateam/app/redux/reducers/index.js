import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';
import simReducer from './simReducer';

const rootReducers = combineReducers({
    nav: navReducer,
    loginData : userReducer,
    SimData   : simReducer
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;