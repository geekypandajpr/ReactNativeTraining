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
        flexDirection: 'row'
    },
    header_text: {
        
        color: '#000',
        fontSize: '1rem',
        fontWeight: 'bold',
        margin: 15
    },
   
    Text_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        color: '#000',
    },
    View_Style:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
    providerStyle:
    {
        fontStyle: 'normal',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#1f667e',
        justifyContent: 'center',
        alignItems: 'center',
     },
    Provider_View:
    {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft :130
    },
    Status_Button:
    {
        borderRadius: 10,
        borderWidth: 3,
        width: 90,
        height:35,
        borderColor: '#EEEEF0',
    
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


})