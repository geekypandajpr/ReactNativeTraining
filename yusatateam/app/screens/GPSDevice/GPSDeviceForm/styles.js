import EStyleSheet from 'react-native-extended-stylesheet'
export default EStyleSheet.create({

    flex_one: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        height: '10%'
    },

    colon: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    flex_picker:{
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%'
    },
    flex_two: {
        flex: 2,
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%'
    },
    picker_style: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    View_row: {
        
        flexDirection: 'row',
        marginTop: 0
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      
       
        //paddingLeft: 20
    }

})