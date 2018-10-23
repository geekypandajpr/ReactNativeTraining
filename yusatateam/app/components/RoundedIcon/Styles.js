import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({ 
    container:  {
        flex: 1,
    },
    upper: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    lower: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'green'
    },
    Text_Style: {
        fontStyle: 'normal',
        fontSize: '1rem'
    }
})