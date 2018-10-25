import  EStyleSheet from 'react-native-extended-stylesheet'
export default EStyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        elevation: 1,
        //borderRadius: 2,
        margin: 1
    },
    Button_style: {
        height:'100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        //backgroundColor: 'gray'
        //borderRadius:5
    },
     
    upper: {
        flex: 2,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    lower: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        //padding: 2
    },
    text_Style: {
        fontStyle: 'normal',
        fontSize: '0.8rem'
    }



})

