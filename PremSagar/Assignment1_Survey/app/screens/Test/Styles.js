import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    container: {
        flex: 1        
    },
    topView: {
        alignItems: 'center'
    },
    cardView: {
        width: '95%'
    },
    cardItemView: {
        flexDirection: 'row',
        //backgroundColor: '#00000090'
    },
    startButtonView: {
        flex: 0.5
    },
    timerView: {
        flex: 0.5,
    },
    timerText: {
        color: 'red',
        fontSize: '1rem'
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        width: '95%',
        marginBottom: 5
    },
    button: {
        width: '100%',
        height: 60
    }
});