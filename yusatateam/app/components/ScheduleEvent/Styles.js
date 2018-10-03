import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    text_container: {
        flexDirection: 'row',
        flex: 1
    },
    text_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //flexWrap: 'wrap'
    },
    status_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    statusButton: {
        height: 25,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    status_text:{
        color: '#fff'
    },
    label_text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '$primaryColor'
    },
    value_text: {
        fontSize: '0.8rem',
        color: '#000'
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