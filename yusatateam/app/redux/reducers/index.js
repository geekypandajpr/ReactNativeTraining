import { combineReducers } from 'redux';

import { navReducer } from '../../router';

const rootReducers = combineReducers({
    nav: navReducer,
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;