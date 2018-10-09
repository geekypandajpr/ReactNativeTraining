import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%'
    },
    imageView: {
        height: 240,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    input_view: {
        marginTop: 15,
        width: '85%'
    },
    credentialContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },    
    checkbox: {
        marginTop: 20,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    remember_me: {
        marginLeft: 20
    },
    remember_me_text: {
        color: '#fff',
        fontSize: '1rem'
    },
    button_view: {
        width: '85%',
        marginTop: 20
    },
    button: {
        width: '100%',
        backgroundColor: '#229954',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_text: {
        fontStyle: 'normal',
        color: '#FFF'
    }
})