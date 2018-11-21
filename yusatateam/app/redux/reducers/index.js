import { combineReducers } from 'redux';

import { navReducer } from '../../router';
import appData from './userReducers';

const rootReducers = combineReducers({
    nav: navReducer,
    appData,
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;