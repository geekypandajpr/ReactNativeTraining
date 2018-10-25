import  EStyleSheet from 'react-native-extended-stylesheet'
export default EStyleSheet.create({

    Container:
    {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button_style:
    {
        height:'100%',
        width: '100%',
        borderRadius:5
    },
     
    upper: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        //padding: 2
    },
    text_Style: {
        fontStyle: 'normal',
        fontSize: '0.8rem'
    }



})

