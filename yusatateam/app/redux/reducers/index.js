import { combineReducers } from 'redux';
import appData from './userReducers';

const rootReducers = combineReducers({
    appData,
    //We can add more reducers here, separated by comma(,)
})

export default rootReducers;