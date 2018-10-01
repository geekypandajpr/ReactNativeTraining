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
        flexWrap: 'wrap'
    },
    icon_view: {
        flex: 1
    },
    label_text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff'
    },
    value_text: {
        fontSize: '0.8rem',
        color: '#fff'
    },
    event_date_view: {
        //backgroundColor: '#5ADC94',
        //backgroundColor: '#36B4A6',
        backgroundColor: '$primaryColor',
        elevation: 10,
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