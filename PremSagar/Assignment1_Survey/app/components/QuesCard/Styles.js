import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    cardView: {
        width: '95%'
    },
    quesCardItem: {
        backgroundColor: '$primaryColor'
    },
    quesText: {
        fontSize: '1rem',
        color: '#000'
    },
    optionText: {
        color: '#000',
        fontSize: '0.8rem'
    },
    optionCardItemView: {
        flexDirection: 'row'
    },
    checkbox: {
        flex: 0.1
    },
    textView: {
        flex: 0.9
    }
});