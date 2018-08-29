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
    
    
    


//export default StyleSheet.create({

//     container: {
//         flex: 1,
//         justifyContent: 'center',
// },
//     viewFlex: {
//         flex: 1,
//         flexDirection: 'row',
//         borderBottomColor: 'black',
//         borderBottomWidth: 1,
// },
//     card:{
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor :'#fff',
//         borderRightColor: 'black',
//         borderRightWidth: 1,
// },
    
//     stretch: {
//         //width: 50,
//         height:100
//  },

//     // statusBar: {
//     //     backgroundColor: "green",
//     //     height: Constants.statusBarHeight,
//     //   },
        
//  })
})