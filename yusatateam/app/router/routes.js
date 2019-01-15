import { createStackNavigator } from 'react-navigation';

/**Login */
import LogIn from '../screens/LogIn/LogIn';

/**Home Screen */
import HomeScreen from '../screens/HomeScreen/HomeScreen';

/**Settings */
import Settings from '../screens/Settings/Settings';

/**Dashboard */
import Dashboard from '../screens/Dashboard/Dashboard';

/**GPS Device */
import GPSDevice from '../screens/GPSDevice/GPSDevice';
import GPSDeviceForm from '../screens/GPSDevice/GPSDeviceForm/GPSDeviceForm';
import QrCode from '../screens/QrCodeScanner/QrCode';
import CreateVehicle from '../screens/GPSDevice/GPSDeviceForm/CreateVehicle';

/**Service */
import Schedule from '../screens/Schedule/Schedule';
import ScheduleDetails from '../screens/Schedule/ScheduleDetails/ScheduleDetails';
import AddJob from '../screens/Schedule/AddJob/AddJob';
import Mapview from '../screens/Schedule/AddJob/Mapview';
import DoAssociation from '../screens/DoAssociation/DoAssociation';
import HistoryDetails from '../screens/Schedule/History/HistoryDetails/HistoryDetails';
import History from '../screens/Schedule/History/History';

import Sim from '../screens/Sim/Sim';
import Device from '../screens/Device/Device';
import Jobs from '../screens/Jobs/Jobs';
import Technicians from '../screens/Technicians/Technicians';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import OpenJobs from '../screens/OpenJobs/OpenJobs';
import Calendars from '../screens/Calendars/Calendars';
import TodaysJobs from '../screens/Technicians/TodaysJobs/TodaysJobs';
import TechDetails from '../screens/Technicians/TechDetails/TechDetails';
import Customer from '../screens/AssociationList/Customer';
import Association from '../screens/AssociationList/Association/Association';
import SalesDashboard from '../screens/SalesDashboard/SalesDashboard';

const RouteConfigs = {
    /**Dashboard */
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        }
    },

    /**Login */
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            header: null
        }
    },

    /**Home Screen */
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },

    /**Service */
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            header: null
        }
    },
    AddJob: {   
        screen: AddJob,
        navigationOptions: {
            header: null
        }
    },
    Mapview: {   
        screen: Mapview,
        navigationOptions: {
            header: null
        }
    },
    DoAssociation: {   
        screen: DoAssociation,
        navigationOptions: {
            header: null
        }
    },
    HistoryDetails: {   
        screen: HistoryDetails,
        navigationOptions: {
            header: null
        }
    },
    History: {   
        screen: History,
        navigationOptions: {
            header: null
        }
    },
    ScheduleDetails: {   
        screen: ScheduleDetails,
        navigationOptions: {
            header: null
        }
    },
    
    /**GPS Device */
    GPSDevice: {
        screen: GPSDevice,
        navigationOptions: {
            header: null
        }
    },
    GPSDeviceForm: {   
        screen: GPSDeviceForm,
        navigationOptions: {
            header: null
        }
    },
    QrCode: {   
        screen: QrCode,
        navigationOptions: {
            header: null
        }
    },
    CreateVehicle: {   
        screen: CreateVehicle,
        navigationOptions: {
            header: null
        }
    },

    /**Forgot Password */
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },

    /**Settings */
    Settings: {
        screen: Settings,
        navigationOptions: {
            header: null
        }
    },

    /**Others */
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
    Technicians: {
        screen: Technicians,
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
    TodaysJobs: {   
        screen: TodaysJobs,
        navigationOptions: {
            header: null
        }
    },
    TechDetails: {   
        screen: TechDetails,
        navigationOptions: {
            header: null
        }
    },
    SalesDashboard: {   
        screen: SalesDashboard,
        navigationOptions: {
            header: null
        }
    },
    
}

const StackNavigatorConfig = {
    initialRouteName: 'LogIn',
    headerMode: 'float'
}

const Routes = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes ;