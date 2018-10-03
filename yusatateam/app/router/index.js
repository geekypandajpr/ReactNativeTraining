import { createStackNavigator } from 'react-navigation';
import {
    LogIn,
    HomeScreen,
    Sim,
    Schedule,
    VehicleList,
    DeviceSimItem
} from '../screens';

const AppRouter = createStackNavigator(
    {
        LogIn: {
            screen: LogIn,
            navigationOptions: {
                header: null
            }
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
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
        },
        Sim: {
            screen: Sim,
            navigationOptions: {
                header: null
            }
        },
        DeviceSimItem: {
            screen: DeviceSimItem,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'LogIn'
    }
)

export { AppRouter };