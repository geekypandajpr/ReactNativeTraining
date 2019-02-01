import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#efefef'
    },
    view: {
        backgroundColor: '#fff',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12
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
        height: 23,
        borderRadius: 4,
        padding: 2,
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
    }
})