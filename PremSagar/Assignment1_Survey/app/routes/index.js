import { createStackNavigator } from 'react-navigation';
import { Test, Result } from '../screens';

const AppRoutes = createStackNavigator(
    {
        Test: {
            screen: Test,
            navigationOptions: {
                header: null
            },
        },
        Result: {
            screen: Result,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Test'
    }
);

export { AppRoutes };