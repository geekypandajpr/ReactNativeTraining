import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors'
export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    searchView : {
        flexDirection :'row',
        height: 50,
        backgroundColor : 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :6,
        marginRight :6,
<<<<<<< HEAD
    },
    filterIcon : {
        flex : 2,
        alignItems : 'center',
        justifyContent : 'center',
        height: 40,
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
        flexDirection: 'row',
    },
    jobNumText: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500',
    },
    right_sub_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        fontSize: '0.8rem',
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
        justifyContent: 'center',
    },
    right_view: {
        flex: 1.5,
    },
    text1: {
        fontSize: '0.9rem',
        color: 'gray',
    },
    location: {
        flex: 1,
    },   
    footerbutton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.HEADER_COLOR,
    },
    footerbuttonText: {
        color: '#fff',
        fontSize: '1rem',
    } 
=======
    },
    top_view: {
        height: 50,
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 2,
        // backgroundColor: 'red',
        flexDirection: 'row'
    },
    dropdown_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    search_view: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        borderWidth: 1,
    },
    search: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        borderWidth: 1,
        flexDirection: 'row'
    },
    textinput_view: {
        flex:1,
        alignItems: 'center',
        // width: '100%',
        // height: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row'
    },
    text_input: {
        width: '100%',
        height: '100%',
        padding: 10
    },
>>>>>>> 5b479d6388b35119ea25adc66502c99156c5edd2
})