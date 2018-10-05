import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const _width = Dimensions.get('window').width;
export default EStyleSheet.create({
    credentialView: {
        padding: 9,
        justifyContent: 'space-around',
        width: _width * 0.85
    },
    icon: {
        color: '#229954'
    }
})