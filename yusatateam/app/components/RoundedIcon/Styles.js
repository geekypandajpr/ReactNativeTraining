import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_Style: {
        height: '100%',
        width: '100%'
    },
    upper: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green',
        //padding: 2
    },

    text_Style: {
        fontStyle: 'normal',
        fontSize: '0.8rem'
    }
})