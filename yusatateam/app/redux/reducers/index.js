import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import loginData from './loginReducer';

const rootReducers = combineReducers({
    nav: navReducer,
    loginData: loginData,
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;