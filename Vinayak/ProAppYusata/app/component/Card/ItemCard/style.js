import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    card:
{
  flex: 1,
  flexDirection : 'row',
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da', 
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

image :
{
width : 120,
height : 180

},
  });