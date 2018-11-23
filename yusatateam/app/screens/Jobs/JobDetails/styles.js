import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../constants/colors'
export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#efefef'
    },
    header: {
        backgroundColor:  colors.HEADER_COLOR
    },
    title: {
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: '500'
    },
    view: {
        backgroundColor: '#fff',
        padding: 8
    },
    sub_view: {
        flexDirection: 'row',
    },
    left_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    middle_view: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right_view: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    key_text: {
        fontSize: '1rem',
        color: '#000',
        padding: 4
    },
    colon: {
        color: 'gray',
        padding: 4
    },
    value_text: {
        fontSize: '0.8rem',
        color: 'gray',
        padding: 4
    },
    view1: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 8
    },
    job_type: {
        width: 80,
        height: 23,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    status_view: {
        width: 90,
        height: 23,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5cb85c'
    },
    status_text: {
        color: '#fff',
        fontSize: '0.8rem'
    },

})