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
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'#00000090',
        flexDirection:'column',
    },
    modal_child_container: {
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: '70%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    header_view: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    header_text: {
        color: '$primaryColor',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    service_num: {
        flex: 1
    },
    status_picker: {
        flex: 1,
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 4,
        marginBottom: 4
    },
    upper_view: {
        flex:10,
        //backgroundColor: 'red'
    },
    comment_text_view: {
        width: '100%',
        justifyContent: 'flex-start',
    },
    comment_text: {
        color: '#000',
        fontSize: '1rem'
    },
    comment_box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_input_view: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    text_input: {
        width: '100%',
        padding: 10
    },
    lower_view:{
        marginTop: 5,
        marginBottom: 5,
        flex: 2,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        //backgroundColor: 'green'
    },
    button_view: {
        justifyContent: 'center'
    },
    submit_button: {
        backgroundColor: '$primaryColor',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#fff'
    },
    picker_view: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },
    picker: {
        height: '100%',
        width: '100%'
    }
});