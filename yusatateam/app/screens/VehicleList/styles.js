import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
    },
    Cust_name: {
        
        color: '#000',
        fontWeight: '500'
    },
    Secondrow:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mobile_no:
    {
        justifyContent: "flex-start",
        flexDirection: 'row',
        alignItems: 'center'
    },
    View_more:
    {
        marginRight: 10,
        color: '#808080'
    },
    location:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    Next_page:
    {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center'
    }
})