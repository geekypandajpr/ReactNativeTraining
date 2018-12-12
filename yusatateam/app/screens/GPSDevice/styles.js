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
    }
})