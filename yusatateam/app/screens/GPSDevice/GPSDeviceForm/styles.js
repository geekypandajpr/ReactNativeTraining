import EStyleSheet from 'react-native-extended-stylesheet'
export default EStyleSheet.create({

    flex_one: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
   
    colon: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    flex_two: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width : '80%'
    },
    picker_style:{
        // borderColor:'#000',
        // borderWidth:1,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    View_row: {
        flex: 1,
        flexDirection: 'row',
        marginTop:10
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //paddingLeft: 20
    }
    
})