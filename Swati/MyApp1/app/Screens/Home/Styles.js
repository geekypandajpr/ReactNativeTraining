import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    backgroundView: {
        backgroundColor: '#add8e6',
        height:50,
        width:'100%'
    },
    firstCardView:{
        flexDirection:'column',
        //width:'95%',
        //alignItems:'center',
        justifyContent:'center',       
       // position:'absolute',
        marginTop:-30
    },
    card:{
        width:'95%',
       // alignItems:'center',
        //justifyContent:'center'
    },
    imageBackground:{
        height:120,
        width:'100%',
        alignItems:'center',
        
    },
    secondCardView:{
        flexDirection:'column',
        justifyContent: 'space-between'
    }
   
})