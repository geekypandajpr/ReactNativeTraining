import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const _width = Dimensions.get('window').width;
export default EStyleSheet.create({
    container: {
        width:'100%'
    },
    icon: {
        color: '#229954'
    }
})