import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
        
     },
     text: {
        color: '#4f603c'
     },
     main : {
         flex :1,
         borderRadius : 10
     },
     search : {
         flex : 0.2,
         borderRadius : 50
     },
     list : {
         flex : 100,
         justifyContent : 'flex-start',
     }
})
