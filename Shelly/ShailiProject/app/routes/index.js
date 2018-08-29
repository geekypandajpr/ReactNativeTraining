import { createStackNavigator } from 'react-navigation';
import { Details } from '../screens/detail/details';
import { Home } from '../screens/home';

const AppRoutes = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Details: {
            screen: Details,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export {AppRoutes}