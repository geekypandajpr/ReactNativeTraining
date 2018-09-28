import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    text_container: {
        flexDirection: 'row'
    },
    text_view: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon_view: {
        flex: 1
    },
    label_text: {
        fontSize: '0.9rem',
        fontWeight: 'bold'
    },
    value_text: {
        fontSize: '0.8rem'
    },
    event_date_view: {
        backgroundColor: '#36B4A6',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    empty_date_view: {
        backgroundColor: '#5ADC94',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
});