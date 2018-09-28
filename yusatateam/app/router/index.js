import { createStackNavigator } from 'react-navigation';
import {
    HomeScreen,
    Sim,
    Schedule,
    VehicleList,
    DeviceSimItem,
    ViewVehicleList
} from '../screens';

const AppRouter = createStackNavigator(
    {
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
        },
        ViewVehicleList: {
            screen: ViewVehicleList,
            navigationOptions: {
                header: null
            }
        }
    },

    {
        initialRouteName: 'HomeScreen'
    }
)

export { AppRouter };