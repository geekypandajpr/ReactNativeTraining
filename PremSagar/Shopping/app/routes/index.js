import { createStackNavigator } from 'react-navigation';
import { Home, Details } from '../screens';

const AppRoutes = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            },
        },
        Details: {
            screen: Details,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home',
        mode: 'card',
        headerMode: 'float'
    }
);

export { AppRoutes };