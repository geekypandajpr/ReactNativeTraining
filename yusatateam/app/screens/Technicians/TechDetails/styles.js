import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;

export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e2e2e2',
    },
    first_view: {
        flex: 1,
        backgroundColor: '#fff',
        height: HEIGHT/2
    },
    date_view: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        padding: 4,
        borderColor: 'gray'
    },
    date: {
        color: '#000',
        fontSize: '0.8rem'
    },
    view: {
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    }
})