import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    nav: navReducer,
    loginData: userReducer,
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;