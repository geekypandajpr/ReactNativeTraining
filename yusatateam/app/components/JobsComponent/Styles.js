import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../styles';

export default EStyleSheet.create({
    list: {
        backgroundColor: '#fff'
    },
    listitem: {
        height: 80
    },
    body: {
        marginLeft:12,
        marginRight:10,
        flex: 1,
        height: 80
    },
    first_view: {
        flexDirection: 'row' 
    },
    job_type_view: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    job_type: {
        width: 70,
        borderRadius: 4,
        borderColor: colors.HOMESCREEN.SIMCARD_COLOR,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    job_num: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    sub_text: {
        fontSize: '0.8rem',
        color: 'gray',
        fontWeight: '300'
    }
});