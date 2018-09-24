
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({   
    header: {
        flex: 1,
        backgroundColor: '#6781DC',
        flexDirection: 'row'
    },
   
    header_content: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-around'
    },
    header_icon: {
        color: 'white',
    },
    textInputStyle: {
        height: 30,
        width: 270,
        borderWidth: 0,
        borderColor: '#3452BB',
        borderRadius: 20,
        backgroundColor: '#3452BB',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textInput_content: {
        //flex:1,
        width: 150,
    }
});