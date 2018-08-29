import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
      flex: 1,
      flexDirection : 'row',
       borderBottomColor:'black',
       borderBottomWidth: 1
    },
    secondItem :
    {
      flex: 1,

    },
    
strips:{
  flex: 0.4,
  flexDirection : 'row',
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da', 
  backgroundColor : 'orange',
  height :50,
  alignItems:'center',
  justifyContent: 'center',
},
imageslider :{
  
  height : 250
},
viewAll :{
  color: 'orange'
},
view:{
  flex: 0.2,
  flexDirection : 'row',
  alignItems:'center',
  justifyContent: 'center',
  height : 20,
  backgroundColor : 'yellow'
}
 }); 