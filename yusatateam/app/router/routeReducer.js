import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

export default (AppNavigator) => {
    const navReducer = createNavigationReducer(AppNavigator);
    //NOTE: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
    const middleware = createReactNavigationReduxMiddleware(
        "root",
        state => state.nav,
    );

    return { navReducer, middleware };
};