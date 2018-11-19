import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    container:{
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
        flexDirection: 'row'
    },
    service_num: {
        flex: 1,
        justifyContent: 'center'
    },
    header_text: {
        color: '#000',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: 15
    },
    View_Container:{
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    Margin_View:{
        flexDirection: 'row',
        marginTop: 3
    },
    Level_Flex:{
        flex: 1,
        justifyContent:'center'
    },
    Text_Style:{
        fontStyle: 'normal',
        fontSize: '1.1rem',
        color: '#000',
    },
    Column_Flex:{
        flex: 0.1,
        justifyContent:'center'
    },
    Text_Flex:{
        flex: 1,
        justifyContent: 'center'
    },
    View_Style:{
        fontStyle: 'normal',
        fontSize: '1rem',
        color: 'gray',
        marginLeft: 10
    },
    status: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
        //backgroundColor: 'green',
    },
    status_text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#5cb85c',
        marginLeft:10
    },
    Mobile_Level: {
        flexDirection: 'row',
        marginTop: 6,
    },
    Icon_View:{
         flex: 0.15,
         justifyContent: 'center', 
         alignItems: 'flex-start' 
    },
    Mobile_View:{
         flex: 2, 
         justifyContent: 'center',
          alignItems: 'flex-start' 
    },
    Button_View:{
        marginTop: 10,
    },
    
})