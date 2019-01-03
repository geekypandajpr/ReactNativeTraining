import { createStackNavigator } from 'react-navigation';

import LogIn from '../screens/LogIn/LogIn';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Sim from '../screens/Sim/Sim';
import Device from '../screens/Device/Device';
import Schedule from '../screens/Schedule/Schedule';
import Jobs from '../screens/Jobs/Jobs';
import Settings from '../screens/Settings/Settings';
import Dashboard from '../screens/Dashboard/Dashboard';
import Technicians from '../screens/Technicians/Technicians';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import OpenJobs from '../screens/OpenJobs/OpenJobs';
import Calendars from '../screens/Calendars/Calendars';
import TodaysJobs from '../screens/Technicians/TodaysJobs/TodaysJobs';
import TechDetails from '../screens/Technicians/TechDetails/TechDetails';
import Customer from '../screens/AssociationList/Customer';
import Association from '../screens/AssociationList/Association/Association';
import GPSDevice from '../screens/GPSDevice/GPSDevice';
import GPSDeviceForm from '../screens/GPSDevice/GPSDeviceForm/GPSDeviceForm';
import SalesDashboard from '../screens/SalesDashboard/SalesDashboard';
import QrCode from '../screens/QrCodeScanner/QrCode';
// import {
//     LogIn,
//     HomeScreen,
//     Sim,
//     Device,
//     Schedule,
//     VehicleList,
//     Jobs,
//     Settings,
//     Dashboard,
//     Technicians,
//     ForgotPassword,
//     OpenJobs,
//     Calendars,
//     TodaysJobs,
//     TechDetails
// } from '../screens';

const RouteConfigs = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },
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
    Customer: {
        screen: Customer,
        navigationOptions: {
            header: null
        }
    },
    Association:
    {   
        screen: Association,
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
    Device: {
        screen: Device,
        navigationOptions: {
            header: null
        }
    },
    Jobs: {
        screen: Jobs,
        navigationOptions: {
            header: null
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            header: null
        }
    },
    Technicians: {
        screen: Technicians,
        navigationOptions: {
            header: null
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },
    OpenJobs: {
        screen: OpenJobs,
        navigationOptions: {
            header: null
        }
    },
    Calendars: {
        screen: Calendars,
        navigationOptions: {
            header: null
        }
    },
    TodaysJobs:
    {   
        screen: TodaysJobs,
        navigationOptions: {
            header: null
        }
    },
    TechDetails:
    {   
        screen: TechDetails,
        navigationOptions: {
            header: null
        }
    },
    GPSDevice:
    {   
        screen: GPSDevice,
        navigationOptions: {
            header: null
        }
    },
    GPSDeviceForm:
    {   
        screen: GPSDeviceForm,
        navigationOptions: {
            header: null
        }
    },
    SalesDashboard:
    {   
        screen: SalesDashboard,
        navigationOptions: {
            header: null
        }
    },
    QrCode:
    {   
        screen: QrCode,
        navigationOptions: {
            header: null
        }
    }
}

const StackNavigatorConfig = {
    initialRouteName: 'LogIn',
    headerMode: 'float'
}

const Routes = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes ;