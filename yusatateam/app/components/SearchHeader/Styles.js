import EStyleSheet from 'react-native-extended-stylesheet';
import colors from  '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' 
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.HEADER_COLOR
    },
    search_view: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width:'100%',
        height: '75%'
    },
    item: {
        borderBottomWidth: 0,
        width: '100%'
    }
});