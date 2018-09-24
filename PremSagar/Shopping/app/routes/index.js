import { createStackNavigator } from 'react-navigation';
import { Home, Details,FlexDemo } from '../screens';

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
        },
        FlexDemo : {
            screen: FlexDemo,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'FlexDemo',
        mode : 'card',
        headerMode : 'float'
    }
);

export { AppRoutes };