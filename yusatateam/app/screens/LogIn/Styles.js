import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    imageView: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    input_view: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },
    checkbox: {
        marginTop: 25,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 0,
        //backgroundColor: 'red'
    },
    checkbox_view: {
        flex: 1,
        alignItems:'center',
        flexDirection: 'row'
    },
    remember_me: {
        marginLeft: 20
    },
    remember_me_text: {
        color: '#000',
        fontSize: '0.8rem'
    },
    forgot_view: {
        flex: 1,
        //backgroundColor: 'green',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    forgot_text: {
        color: '#000',
        fontSize: '0.8rem'
    },
    button_view: {
        width: '85%',
        marginTop: 25,
        marginBottom: 25
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
    },
    animated_button: {
        backgroundColor: '#229954',
        height: 45
    }
})