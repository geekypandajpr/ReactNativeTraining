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
    imageView: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 0
    },
    cardView: {
        width: '95%',
        height: 220
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1
    },
    relativeView: {
        marginTop: 150
    }
})