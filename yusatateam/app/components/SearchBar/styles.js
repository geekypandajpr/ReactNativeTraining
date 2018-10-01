import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'lightgreen'
        //flexDirection: 'row',
        //margin :50,
        //backgroundColor: 'grey',
       
    },
    borderSearch:
    {     
        flex :8,
        marginLeft : 10
       
    },
    searchIcon:
    {
        flex:0.5,
        flexDirection:'row',
        marginTop:40,
        marginLeft : 10,
        borderRadius : 10,
        width: "95%", 
        borderColor: 'gray',
         borderWidth: 1, 
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : 'white'
       
    },
    icon : {
        flex : 1,
        //marginTop : 20
    }

})