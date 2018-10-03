import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const _width = Dimensions.get('window').width;
export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        //backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundImage: {
        height:'100%',
        width:'100%'
    },
    imageView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 20
    },
    credentialContainer: {
        flex: 2.5,
        justifyContent: 'center'
    },    
    checkbox: {
        width: _width * 0.85,
        flexDirection: 'row',
        marginTop: 20,
    },
    checkboxBody: {
        alignItems: 'flex-start',
        marginLeft: 20
    },
    buttonView: {
        flex: 1,
        padding: 12,
        marginTop: 10
    },
    button: {
        backgroundColor: '#229954',
        width: _width * 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'normal',
        color: '#FFF'
    },
    versionTextView: {
        alignItems: 'center'
    },
    versionText: {
        color: '#229954'
    },

})