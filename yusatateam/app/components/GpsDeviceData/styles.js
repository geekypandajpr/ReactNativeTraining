import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
    },
<<<<<<< HEAD
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
        flex : 2,
        alignItems : 'center',
        justifyContent : 'center',
        height: 40,
        // backgroundColor: 'white'
        borderRadius: 2,
        marginRight:2,
        borderRadius : 0.2,
        borderColor : 'black',
        borderWidth : 0.5,
    },
    viewList: {
        flex: 1,
        flexDirection : 'row',
        // marginLeft :6,
        // marginRight :6,
        // padding: 10,
    },
    sub_view: {
=======
    view: {
>>>>>>> 5b479d6388b35119ea25adc66502c99156c5edd2
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
