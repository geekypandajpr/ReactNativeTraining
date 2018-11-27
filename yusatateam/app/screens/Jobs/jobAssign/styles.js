import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../constants/colors';
export default EStyleSheet.create({
    $headerColor : '#1f667e',
    $headerIconColor : '#fff',
    $headerTitleSize : '1.2rem',
    $headerTitleColor : '#fff',

    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    viewList: {
        flex: 1,
        flexDirection : 'row',
        marginLeft :6,
        marginRight :6,
        padding: 10
    },
    sub_view: {
        flexDirection: 'row'
    },
    jobNumText: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    right_sub_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
        color: '#F98866',
        fontSize: '0.8rem'
    },
    left_view: {
        flex: 1,
    },
    text: {
        fontSize: '0.9rem',
        color: '#000',
    },
    middle_view: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right_view: {
        flex: 1.5,
    },
    text1: {
        fontSize: '0.9rem',
        color: 'gray'
    },
    
});