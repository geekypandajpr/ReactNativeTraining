import EStylesheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStylesheet.create({
    cardView: {
        width: Dimensions.get('window').width*0.95
    },
    quesCardItem: {
        backgroundColor: '$primaryColor'
    },
    quesText: {
        fontSize: '1rem',
        color: '#000'
    },
    optionText: {
        color: '#000'
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