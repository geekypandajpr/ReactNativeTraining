import EStylesheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default EStylesheet.create({
    $headerColor : '#1f667e',
    $headerIconColor : '#fff',
    $headerTitleSize : '1.2rem',
    $headerTitleColor : '#fff',

    appBar: {
        backgroundColor: '$headerColor',
        height: APPBAR_HEIGHT,
        elevation: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    toolbar_text: {
        color: '$headerTitleColor',
        fontSize: '$headerTitleSize',
        marginLeft: 30
    },
    menu_icon: {
        marginLeft: 20
    },
})