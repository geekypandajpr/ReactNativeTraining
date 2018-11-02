import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, StatusBar, StyleSheet } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default EStyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    appBar: {
        //backgroundColor: '#171c2e',
        backgroundColor: 'white',
        height: APPBAR_HEIGHT,
        width: '90%',
        //elevation: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    forgot_view: {
        height: 40,
        width: '90%'
    },
    forgot_text: {
        fontSize: '1.3rem',
        color: '#171c2e',
        fontWeight: '500'
    },
    input_view: {
        width: '90%'
    },
    input: {
        fontSize: '0.9rem'
    },
    email_text: {
        fontSize: '1rem',
        color: '#000'
    },
    button_view: {
        width: '90%',
        height: 40,
        marginTop: 20
    },
    button: {
        // backgroundColor: '#5cb85c',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})