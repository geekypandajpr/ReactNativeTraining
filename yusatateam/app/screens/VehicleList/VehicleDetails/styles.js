import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff'
    },
    inner_container:
    {
        padding: 4,
        flex: 1
    },
    card_style:
    {
        flex: 1,
        borderColor: 'white'
    },
    Padding_view:
    {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10
    },
    flex_one:
    {
        flex: 1
    },
    View_row:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Vehicle_no: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    Vehicle_num: {
        fontSize: '0.9rem',
        color: '#000',
        fontWeight: '500',
        marginLeft: 6
    },
    Sim_no:
    {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    status_View:
    {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    jobTypeView: {
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',

    },
    jobTypeText: {
        color: '#1f667e',
        fontSize: '0.8rem'
    },
})