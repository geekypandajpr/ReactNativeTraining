import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container : {
        flex :1,
        flexDirection: 'row',
    },
    first_view: {
        flex: 7.5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    second_view: {
        flex: 2.5,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    radio_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems :'center',
        justifyContent :'flex-start'
    },
    radio_text: {
        paddingLeft :5,
        fontSize: '0.8rem'
    }
});
