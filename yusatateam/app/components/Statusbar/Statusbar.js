import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Statusbar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export { Statusbar }


const styles = EStyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});