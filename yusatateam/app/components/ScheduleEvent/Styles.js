import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    '$fontFamily': 'normal',
    text_container: {
        flexDirection: 'row',
        flex: 1
    },
    first_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //flexWrap: 'wrap'
    },
    second_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    statusButton: {
        // height: 23,
        // width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding:4,
        height: 22
    },
    status_text:{
        color: '#fff',
        fontFamily: '$fontFamily',
    },
    label_text: {
        fontFamily: '$fontFamily',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#000'
    },
    value_text: {
        fontFamily: '$fontFamily',
        fontSize: '0.85rem',
        color: '#000'
    },
    view_more: {
        fontFamily: '$fontFamily',
        fontSize: '0.6rem',
        color: 'gray'
    },
    service_type_view: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 3
    },
    service_type: {
        fontFamily: '$fontFamily',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#1766A6'
    },
    event_date_view: {
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
    icon_view: {
        flex: 0.1
    }
});