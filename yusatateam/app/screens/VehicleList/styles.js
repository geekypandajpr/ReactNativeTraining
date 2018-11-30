import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
    },
    Cust_name: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    middle_View:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    View_more:
    {
        marginRight: 10,
        color: '#808080'
    },
    lower_view:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    second_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },


})