import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';
export default EStyleSheet.create({
    tabheading: {
        backgroundColor: colors.HEADER_COLOR
    },
    tab_view: {
        // width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextView: {
        color: '#fff',
        fontSize: '1rem'
    },
})
