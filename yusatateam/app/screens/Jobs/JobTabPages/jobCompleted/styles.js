import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../constants/colors';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchView : {
        flexDirection :'row',
        height: 50,
        backgroundColor : 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :6,
        marginRight :6,
    },
    filterIcon : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        height: 40,
        backgroundColor: 'white'
        ,borderRadius: 2,
        marginRight:2,
        borderRadius : 0.2,
        borderColor : 'black',
        borderWidth : 0.5
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
    sub_view: {
        flexDirection: 'row'
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
        flex: 1,
        // backgroundColor: 'red'
    },
})
