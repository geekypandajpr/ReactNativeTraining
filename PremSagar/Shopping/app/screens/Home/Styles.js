import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    container: {
        flex: 1
    },
    coloredView: {
        height: 80,
        width: '100%',
        backgroundColor: '$primaryColor'
    },
    sliderView: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 0
    },
    slider: {
        width: '95%'
    }
})