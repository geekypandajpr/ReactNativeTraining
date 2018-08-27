import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    
    
    parent:{
        flex:1,
        justifyContent:'center'
     },
     child:{
         flex:1,
         flexDirection:'row',
         borderBottomColor:'black',
         borderBottomWidth: 1
     },

    child2:{
                flex: 0.5,
                justifyContent: 'center',
                 backgroundColor :'white',
                borderRightColor: 'black',
                borderRightWidth: 1,
                alignItems:'center',
                width:'100%',
                height: '100%'

         },
    
})