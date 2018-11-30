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
        //height: HEIGHT / 2,
        backgroundColor: '#fff'
    },
    second_view: {
        flex: 1,
        marginTop: 10,
        //height: HEIGHT / 2,
        backgroundColor: '#fff'
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
        alignItems: 'center'
    },
    left_view: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColksor: 'red'
    },
    right_view: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    key_text: {
        fontSize: '0.8rem',
        color: '#000',
        fontWeight: '400'
    },
    value_text: {
        fontSize: '0.8rem',
        color: 'gray'
    },
    square: {
        width: 14,
        height: 14,
        marginRight: 8
    }
})