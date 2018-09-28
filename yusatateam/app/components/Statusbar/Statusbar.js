import { View, StatusBar } from 'react-native';
import styles from './Styles';

const Statusbar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export { Statusbar }