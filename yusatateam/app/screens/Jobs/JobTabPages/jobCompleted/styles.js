import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../constants/colors';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewList: {
        flex: 1,
        flexDirection : 'row',
        marginLeft :6,
        marginRight :6,
        padding: 10
    },
    jobNumText: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    jobText: {
        fontSize: '0.8rem',
        color: '#fff',
    },
    sub_view: {
        flexDirection: 'row'
    },
    right_sub_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    right_sub_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    status_view: {
        borderRadius: 10,
        // borderWidth: 0.8,
        // borderColor: '#5cb85c',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5cb85c'
    },
    text: {
        fontSize: '0.9rem',
        color: '#000',
    },
    text1: {
        fontSize: '0.9rem',
        color: 'gray'
    },
    left_view: {
        flex: 1,
    },
    middle_view: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right_view: {
        flex: 1.5,
    },
    location: {
        flex: 3,
        // backgroundColor: 'red'
    },
    job_type: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    jobTypeView: {
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobTypeText: {
        color: '#000',
        fontSize: '0.8rem'
    },
    footerbutton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.HEADER_COLOR
    },
    footerbuttonText: {
       color: '#fff',
       fontSize: '1rem'
    }
})
