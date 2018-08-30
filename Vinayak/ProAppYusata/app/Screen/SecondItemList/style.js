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
image :
{
  width : 120,
  height : 180

}
 });