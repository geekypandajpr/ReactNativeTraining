import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    container:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00000090',
        flexDirection: 'column',
    },
    header_view: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
        elevation: 5,
        flexDirection: 'row',
    },
    service_num: {
        flex: 7,
        justifyContent: 'center'
    },
    header_text: {

        color: '#000',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: 15
    },
  
    right_sub_view: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 10
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
        color: '#F98866',
        fontSize: '0.8rem'
    },
    View_Container:
    {
        backgroundColor: '#FFFFFF',
        height: '70%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    Margin_View:
    {
        flexDirection: 'row',
        marginTop: 3
    },
    Level_Flex:
    {
        flex: 1.5,
        justifyContent:'center'
    },
    Order_text:
    {
        fontStyle: 'normal',
        fontSize: '1.2rem',
        color: '#000',
        fontWeight: '100',
    },
    Column_Flex:
    {
        flex: 0.1,
        justifyContent:'center'
    },
    Text_Flex:
    {
        flex: 2,
        justifyContent: 'center'
    },
    Order_texts:
    {
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: 'gray',
        fontWeight: '100',
        marginLeft:10
    },
    Text_Style:
    {
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: '#000',
    },
    column_price:
    {
        flex:0.1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    View_price:
    {
        flex:2,
        flexDirection:'row'
    },
    Rupee_icon:
    {
         flex: 0.1,
        marginTop:4,
        marginLeft:10
    },
    Text_price:
    {
        flex:1.9,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    Mobile_Level: {
        flexDirection: 'row',
        marginTop: 6
    },
    View_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: 'gray',
        marginLeft: 10
    },
    close_button: {
        padding : 10,
        //paddingRight : 0, 
    },
    close_button_Text : {
        color: '#fff',
        fontSize: '1rem'
    },

})