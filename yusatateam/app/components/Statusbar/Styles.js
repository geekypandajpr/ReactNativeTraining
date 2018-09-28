import { Platform, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export default EStyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});