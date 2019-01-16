import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../styles';

export default EStyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
    },
    inner_container: {
        flex: 1,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.HEADER_COLOR
    },
    buttonText: {
       color: '#fff',
       fontSize: '1rem'
    }
});