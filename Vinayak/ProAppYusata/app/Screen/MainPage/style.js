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
    child:{
      flex: 0.5,
      justifyContent: 'center',
       backgroundColor :'white',
      borderRightColor: 'black',
      borderRightWidth: 1,
      alignItems:'center',
      width:'100%',
      height: '100%'

},
card:
{
  flex: 1,
  flexDirection : 'row',
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da', 
},
image :
{
  width : 120,
  height : 180

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
}
 }); 