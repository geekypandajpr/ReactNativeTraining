import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flexDirection: 'row',
    },
    title_view: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    status_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        // backgroundColor: 'red'
    },
    status: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        height: 23,
        width: 80,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    first_view: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    middle_view: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    last_view: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
