import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../styles'

export default EStyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: 'transparent' 
    },
    container: {
        height: '100%',
        width: '100%'
    },
    header: {
        backgroundColor:  colors.HEADER_COLOR
    },
    title: {
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: '500'
    },
    inner_container:{
        flex: 1,
        backgroundColor: '#efefef'
    },
    first_view: {
        backgroundColor: '#fff',
        padding: 8
    },
    sub_view: {
        flexDirection: 'row',
    },
    left_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    serviceType: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middle_view: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right_view: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    key_text: {
        fontSize: '1rem',
        color: '#000',
        padding: 4
    },
    colon: {
        color: 'gray',
        padding: 4
    },
    value_text: {
        fontSize: '0.8rem',
        color: 'gray',
        padding: 4
    },
    second_view: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 8
    },
    job_type: {
        height: 23,
        padding: 2,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    job_type_text: {
        color: 'gray',
        fontSize: '0.8rem'
    },
    status_view: {
        height: 25,
        padding: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5cb85c'
    },
    status_text: {
        color: '#fff',
        fontSize: '0.8rem'
    },
    button_view: {
        flex: 1,
        backgroundColor: 'red'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9534f'
    },
    device_picker: {
        flex: 1,
        height: 35,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 0,
        margin: 2
    },
    picker_view: {
        flex: 1,
        flexDirection: 'row',
        padding: 4
    },
    picker: {
        height: '100%',
        width: '100%'
    },
    comment_box: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
    },
    comment_input_view: {
        width: '100%',
        height: 100,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 1,
    },
    comment_text: {
        fontSize: '0.8rem',
        color: '#000',
        padding: 8
    }
});