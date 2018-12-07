import EStyleSheet from 'react-native-extended-stylesheet';
import fontsize from './fontsize';

export default EStyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 3,
        padding: 6
    },
    title_text: {
        fontSize: fontsize.big,
        color: '#000000',
        fontWeight: '500',
    },
    primary_text: {
        fontSize: fontsize.medium,
        color: '#000000',
        fontWeight: '400'
    },
    secondary_text: {
        fontSize: fontsize.small,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: '400'
    }
});