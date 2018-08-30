import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageView: {
        flex: 0.8,
        height: '100%',
        width: '100%'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    textView: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: '0.6rem',
        color: '#000'
    },
    text1: {
        fontSize: '0.6rem',
        color: '$primaryColor'
    }
})