import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    event_date_view: {
        backgroundColor: '#36B4A6',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    empty_date_view: {
        backgroundColor: '#ffffff',
        elevation: 1,
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 4,
        marginLeft: 4,
        marginTop: 4,
        marginBottom: 2
    },

    modal_container: {
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#00000090',
        flexDirection:'column',
    },
    modal_child_container: {
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: '60%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});