import EStyleSheet from 'react-native-extended-stylesheet'
export default EStyleSheet.create({


    Sub_View: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    Width_View: {
        alignItems: 'center',
        width: '92%'
    },
    Small_View: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginTop: 10
    },

    Date_picker: {
        flex: 1,
        marginLeft: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 0
    },

    button_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 10
    },
    createVehicle: {
        // color: 'rgb(56,64,64)',
        color: 'gray',
        fontSize: '0.8rem'
    },
    label: {
        color: 'gray',
        fontSize: '0.9rem',
    },
    star: {
        marginTop: 0,
        color: 'red',
        marginLeft: 5,
        fontSize: '1rem'
    },
    value: {
        color: '#000',
        fontSize: '0.9rem'
    },

})