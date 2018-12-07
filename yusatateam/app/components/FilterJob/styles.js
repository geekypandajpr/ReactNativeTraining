import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 7.8,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // backgroundColor: '#00000095',
        flexDirection: 'column',
        paddingRight :7,
        marginTop: 150
    },
    sub_container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '95%',
        
    },
    header_view: {
        width: '70%',
        backgroundColor: '#0073b7',
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
        backgroundColor: '#ffffff',
        width: '70%',
        padding : 15,
        elevation: 10
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})