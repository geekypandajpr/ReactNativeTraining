import EStyleSheet from 'react-native-extended-stylesheet';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
import {
    Platform,
    StatusBar
} from 'react-native';

export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT
    },
    event_date_view: {
        backgroundColor: '#36B4A6',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    empty_date_view: {
        backgroundColor: '#5ADC94',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    text: {
        fontSize: '0.8rem'
    }
})