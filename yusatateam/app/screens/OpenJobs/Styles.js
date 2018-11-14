import EStyleSheet from 'react-native-extended-stylesheet';
//import colors from '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
    },
    inner_container: {
        flex: 1,
    },
    button_view: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'transparent'
    }
});