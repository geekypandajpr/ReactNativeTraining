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
        height: 20,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 5
    },
    status_text:{
        color: '#fff'
    },
    icon_view: {
        flex: 1
    },
    label_text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#000'
    },
    value_text: {
        fontSize: '0.8rem',
        color: '#000'
    },
    event_date_view: {
        //backgroundColor: '#5ADC94',
        //backgroundColor: '#36B4A6',
        //backgroundColor: '$primaryColorLight',
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
    empty_date_view: {
        backgroundColor: '#5ADC94',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
});