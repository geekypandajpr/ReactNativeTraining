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
    },
    top_view: {
        height: 50,
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 0,
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
})