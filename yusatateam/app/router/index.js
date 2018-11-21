import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import routeReducer from './routeReducer';
import AppNavigator from './routes';

const { navReducer, middleware } = routeReducer(AppNavigator);

const App = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

const Navigator = connect(mapStateToProps)(App);

export { Navigator, navReducer, middleware };