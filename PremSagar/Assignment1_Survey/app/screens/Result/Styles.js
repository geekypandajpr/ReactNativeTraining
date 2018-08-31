import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    container: {
        flex: 1        
    },
    resultView: {
        alignItems: 'center'
    },
    cardView: {
        width: '95%'
    },
    cardItem1: {
        flexDirection: 'row',
        backgroundColor: '$primaryColor'
    },
    cardItem: {
        flexDirection: 'row'
    },
    serialNum: {
        flex: 0.2
    },
    choosedAnsView: {
        flex: 0.4
    },
    correctAnsView: {
        flex: 0.4
    },
    scoreView: {
        flex: 0.5
    },
    buttonView: {
        width: '95%'
    },
    button: {
        width: '100%',
        height: 60
    }
});