import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000095',
        flexDirection: 'column',
    },
    sub_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%'
    },
    header_view: {
        width: '100%',
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
        width: '100%',
        padding : 15,
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})