import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(184, 193, 199, 0.5)',
        backgroundColor: '#00000095',
        flexDirection: 'column',
    },
    sub_container: {
        //backgroundColor :'white', 
        justifyContent: 'center',
        alignItems: 'center',
        //height: '75%',
        width: '95%'
    },
    header_view: {
        width: '100%',
        //height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    header_text: {

        color: 'white',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: 15
    },
    View_Container:
    {
        backgroundColor: '#FFFFFF',
       // height: '55%',
        width: '100%',
        padding : 15
        // paddingTop: 15,
        // paddingLeft: 15,
        // paddingRight: 15
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //paddingLeft: 20
    }
})