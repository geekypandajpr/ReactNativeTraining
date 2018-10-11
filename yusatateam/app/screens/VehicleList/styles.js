import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex :1,
     },
     flatView : {
         flex :2, 
     },
     text : {
        fontSize : 25,
        flex :6,
        color : '#4682B4', 
           textShadowColor: '#D3D3D3',
           textShadowOffset: { width: 1, height: 4 },
           textShadowRadius: 5
     },
     text1 : {
        fontSize : 22,
        // color : '#20B2AA', 
     },
     viewList : {
         borderRadius :1,
        
     },
     search : {
        //flex :0.15,
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list : {
        backgroundColor : '#F0FFF0',
        borderRadius : 5,
        margin : 15,
        marginBottom : 0,
        borderStyle : 'dotted',
        paddingLeft : 15,

        shadowColor: '#000000',
        shadowOffset: {
          width: 1,
          height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
        
    }
})
