import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#d3d3d3'
    },
    heading: {
        fontSize: '1.1rem',
        color: '#000',
        fontWeight: '400'
    },
    icon: {
        marginLeft: 20
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        height: 56,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_view: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'        
    },
    button: {
        width: '100%',
        backgroundColor: colors.HEADER_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#fff'
    },
    tab_view: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    from: {
        color: '#000',
        fontSize: '0.9rem'
    },
    date: {
        color: 'gray',
        fontSize: '0.7rem'
    }
});