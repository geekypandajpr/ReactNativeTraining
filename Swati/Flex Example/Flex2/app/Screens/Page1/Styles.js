import EStyleSheet from 'react-native-extended-stylesheet';
 export default EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    buttonView : {                
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginTop : 20
    },
    upperregion : {
        flex : 3,
        alignItems : 'center'
    },
    upperregion_first : {
        flex : 2,
        marginTop : 60,
        alignItems : 'center'
    },
    upperregion_second : {
        flex : 1,
        alignItems : 'center',
        marginBottom : -70,
    },
    today : {
        fontSize : 21,
        color : 'white'
    },
    temp_container : {
        flex : 1,
        flexDirection : 'row',
        marginTop : 10,
        paddingLeft : 25,
        
    },
    today_temp : {
        fontSize : 72,
        color : 'white'
    },
    cloud_icon : {
        flex : 1 ,
       // marginBottom:10        
    },
    weather : {
       marginBottom : 50
    },
    location : {
        fontSize : 30,
        color : 'white',       
    },
    
    lowerregion : {
        flex :1,
        flexDirection : 'row',
        backgroundColor : '#f4f4f4',
        
    },
    otherday : {
        flex : 1,
        backgroundColor : '#d3d3d3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    image_view : {
       // flex : 1,
        flexDirection : 'row',
       // flexDirection : 'column',
        alignItems : 'center',
        height: 50
    },
    otherday1 : {
        flex : 1,
        backgroundColor : '#d3d3d3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    otherday2 : {
        flex : 1,
        backgroundColor : '#d3d3d3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    otherday3 : {
        flex : 1,
        backgroundColor : '#d3d3d3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    otherday4 : {
        flex : 1,
        backgroundColor : '#d3d3d3',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    weekday_temp : {
        fontSize : 31,
        color : 'black'
    },
    cent : {
        fontSize : 15,
        color : 'black'
    },
    weekdaytemp_container : {
        flex : 1,
        flexDirection : 'row',
        marginTop : 10,
        paddingLeft : 10,        
    },
 })