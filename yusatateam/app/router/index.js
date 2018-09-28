import { createStackNavigator } from 'react-navigation';
import {
    Schedule,
    VehicleList
} from '../screens';

const AppRouter = createStackNavigator(
    {
        Schedule: {
            screen: Schedule,
            navigationOptions: {
                header: null
            }
        },
        VehicleList: {
            screen: VehicleList,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'Schedule'
    }
)

export { AppRouter };