import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(184, 193, 199, 0.5)',
        flexDirection: 'column',
    },
    sub_container : {
        //backgroundColor :'white', 
        justifyContent :'center',
        alignItems :'center',
        height : 450,
        width :'95%'
    },
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    header_text: {

        color: '#000',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: 15
    },
    View_Container:
    {
        backgroundColor: '#FFFFFF',
        height: '55%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
})