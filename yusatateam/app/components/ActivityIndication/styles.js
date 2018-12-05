import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
export default EStyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    outer_circle: {
        marginTop: Dimensions.get('window').height/3,
        borderRadius: 21,
        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    }
})