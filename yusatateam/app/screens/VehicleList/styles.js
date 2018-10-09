import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex :1,
     },
     flatView : {
         flex :2, 
     },
     text : {
        fontSize : 30,
        color : '#20B2AA', 
     },
     text1 : {
        fontSize : 22,
        // color : '#20B2AA', 
     },
     viewList : {
         borderRadius :10,
     },
     search : {
        //flex :0.15,
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    list : {
        backgroundColor : 'white',
        borderRadius : 20,
        margin : 15,
        marginBottom : 0,
        borderStyle : 'dotted'
    }
})
