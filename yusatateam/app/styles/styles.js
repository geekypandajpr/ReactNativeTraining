import EStyleSheet from 'react-native-extended-stylesheet';
import fontsize from './fontsize';

export default EStyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        marginLeft: 6,
        marginRight: 6,
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
        color: '#808080',
        // color: 'gray',
        // color: 'rgba(0,0,0,0.5)',
        fontWeight: '400'
    },
    keyboardAvoiding: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    dropdownHeader: {
        backgroundColor: '#fff',
        // borderBottomColor: '#7b7987',
        // borderBottomWidth: 1
    },
    dropdownHeaderText: {
        color: '#7b7987',
        paddingLeft: 5,
        fontWeight: 'bold',
    }
});