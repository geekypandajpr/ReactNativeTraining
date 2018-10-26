import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

const Colors = {
    //mBackColor: '#efefef',
    //mBorderColor: '#efefef',
    mBackColor: '#d3d3d3',
    mBorderColor: '#d3d3d3',
    mSwitch: '#0073b7',
    shadowColor: '#A69E9E'
};

const Metrics = {
    containerWidth: width - 30,
    switchWidth: width / 2.7
};

const styles = StyleSheet.create({

    container: {
        width: Metrics.containerWidth,
        height: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.mBackColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.mBorderColor,
        borderRadius: 27.5
    },
    
    switcher: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: Colors.mSwitch,
        borderRadius: 28,
        height: '98%',
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.switchWidth,
        elevation: 4,
        shadowOpacity: 0.31,
        shadowRadius: 10,
        shadowColor: Colors.shadowColor
    },
    buttonStyle: {
        flex: 1,
        width: Metrics.containerWidth / 3,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    }
});

export default styles;