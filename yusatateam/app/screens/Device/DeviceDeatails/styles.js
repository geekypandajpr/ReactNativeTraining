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
    header_text: {
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
       },
    Status_Button:
    {
        borderRadius: 10,
        borderWidth: 3,
        width: 100,
        height: 35,
        borderColor: '#0073b7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Status_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Order_text:
    {
        fontStyle: 'normal',
        fontSize: '1.2rem',
        color: '#000',
        fontWeight: '100',
    },
    Order_texts:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: 'gray',
        fontWeight: '100',
        marginLeft: 11
    },
    Text_Style:
    {
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: '#000',
    },
    View_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: 'gray',
        marginLeft: 11
    },
    ViewDescription_Text:
    {
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: 'gray',

    },
    service_num: {
        flex: 1,
        justifyContent: 'center'
    },
    job_text: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#000',
        margin: 5
    },
    schedule_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 140
    },
    View_Container:
    {
        backgroundColor: '#FFFFFF',
        height: '65%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    Level_Flex:
    {
        flex: 1.4,
        justifyContent:'center'
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
    Mobile_Level: {
        flexDirection: 'row',
        marginTop: 6
    },
    Button_View:
    {
        flex: 1,
        marginTop: 10
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9534f'
    },
    Margin_View:
    {
        flexDirection: 'row',
        marginTop: 3
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
    }

})