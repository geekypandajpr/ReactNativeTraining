import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
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
    today : {
        fontSize : 21,
        color : 'white'
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
    cloud_icon : {
        flex : 1 ,
       // marginBottom:10        
    }
})