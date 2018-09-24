import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, StatusBar } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default EStyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    },
    appBar: {
        backgroundColor: '#171c2e',
        height: APPBAR_HEIGHT,
        elevation: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    toolbar_text: {
        color: '#fff',
        fontSize: '1.3rem',
        marginLeft: 30
    },
    menu_icon: {
        marginLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#171c2b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_view: {
        width: '90%'
    },
    total_revenue: {
        color: '#ffffff90',
        fontSize: '0.9rem',
    },
    digit: {
        color: '#fff',
        fontSize: '1.8rem',
    },
    cardview: {
        width: '90%',
        height: 80,
        justifyContent: 'center',
        marginBottom: 10
    },
    annual_container: {
        flexDirection: 'row',
        height: 180,
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#3E4357',
        borderRadius: 10,
        marginBottom: 5
    },    
    text_container: {
        flexDirection: 'row',
        height: 100,
        width: '90%',
        alignItems: 'center',

    },
    text_child_container: {
        flex: 1
    },
    phase_container: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5
    },
    twelve: {
        fontSize: '1.5rem',
        color: '#ff8a65'
    },
    text2: {
        fontSize: '0.8rem',
        color: '#ffffff60'
    },
    phaseA: {
        fontSize: '1rem',
        color: '#fff'
    },
    noise: {
        fontSize: '0.6rem',
        color: '#ffffff60',
        marginLeft: 20
    },
    annual: {
        fontSize: '1rem',
        color: '#fff',
        marginLeft: 20
    },
    button_container: {
        alignItems: 'flex-end',
        flex: 1
    },
    buy_btn_view: {
        borderRadius: 15,
        backgroundColor: '#57596E',
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buy: {
        color: '#ffffff80',
        fontSize: '0.9rem'
    }
});