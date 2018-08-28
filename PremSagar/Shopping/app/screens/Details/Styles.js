import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    container: {
        flex: 1
    },
    coloredView: {
        height: 100,
        width: '100%',
        backgroundColor: '$primaryColor'
    },
    sliderView: {
        position: 'absolute',
        top: 120,
        alignItems: 'center',
        width: '90%',
        height: 300,
        backgroundColor: '#fff'
    }
})