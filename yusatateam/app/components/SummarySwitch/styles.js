import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';

const Colors = {
    mBackColor: '#efefef',
    mBorderColor: '#efefef',
    mSwitch: '#d9534f',
    shadowColor: '#A69E9E'
};

const Metrics = {
    containerWidth: width - 20,
    switchWidth: width / 4
};

const styles = EStyleSheet.create({

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
        //backgroundColor: Colors.mSwitch,
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
        width: Metrics.containerWidth / 4,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 27.5
    },
});

export default styles;