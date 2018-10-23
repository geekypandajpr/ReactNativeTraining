import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    /**Modal Styles */
    modal_container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    modal_child_container: {
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: '80%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },

    /**Header Styles */
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row'
    },
    service_num: {
        flex: 1,
        justifyContent: 'center'
    },
    header_text: {
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'bold',
        margin: 15
    },
    schedule_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    job_text: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#000',
        marginRight: 15
    },


    /**Body Styles */
    main_view: {
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    first_view: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        //flexWrap: 'wrap'
    },
    value_text: {
        color: '#000',
        fontSize: '0.9rem',
        flexWrap: 'wrap'
    },
    icon_view: {
        flex: 0.1
    },
    icon_text_view: {
        flex: 1
    },

    status_picker: {
        width: '100%',
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },
    picker: {
        height: '100%',
        width: '100%'
    },

    second_view: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    service_type_view: {
        borderColor:'gray',
        borderWidth: 1,
        padding : 4,
        borderRadius:5
    },
    service_type_text: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: '#1766A6'
    },
    address_view: {
        marginTop: 2,
        marginBottom: 2,
        flex: 1, 
        justifyContent: 'center'
    },
    address_header_text: {
        color:'#000',
        fontSize: '1rem'
    },
    address_text: {
        color:'gray',
        fontSize: '0.9rem'
    },

    /**Comment Box View */
    comment_view: {
        flex: 1,
        flexDirection: 'column'
    },
    comment_box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    comment_input_view: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    comment_text: {
        fontSize: '0.8rem',
        color: '#000',
        padding: 8
    },

    /**Button Styles */
    button_view: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    submit_button: {
        backgroundColor: '#5cb85c',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5
    },
    cancel_button: {
        backgroundColor: '#d9534f',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 5
    },
    button_text: {
        color: '#fff'
    },
});