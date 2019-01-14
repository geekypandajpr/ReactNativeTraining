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
    },
    empty_event_date_view: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 0,
        padding: 10,
        marginRight: 6,
        marginLeft: 0,
        marginTop: 4,
        marginBottom: 2,
    },
});