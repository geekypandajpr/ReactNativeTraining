import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    mainContainer: {
        flex: 1
    },
    backgroundImage: {
        height:'100%',
        width:'100%'
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    credentialContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        //backgroundColor: 'red'
    },    
    checkbox: {
        marginTop: 20,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    remember_me: {
        marginLeft: 20
    },
    remember_me_text: {
        color: '#000',
        fontSize: '1rem'
    },
    button_view: {
        width: '90%',
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
    },
    lower_view :{
        flex: 0.5,
        //backgroundColor: 'orange',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    version_text: {
        color: '#FFF',
        fontSize: '0.8rem',
        padding: 10
    },

})