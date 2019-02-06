import EStyleSheet from 'react-native-extended-stylesheet';
import { colors } from '../../styles';

export default EStyleSheet.create({
    event_date_view: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 0,
        padding: 10,
        marginRight: 6,
        marginLeft: 0,
        marginTop: 4,
        marginBottom: 2,
    },
    text_container: {
        flexDirection: 'row',
        flex: 1,
        margin: 2
    },
    first_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    second_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    statusButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 2,
        height: 25,
        width: 110
    },
    status_text:{
        color: '#fff'
    },
    label_text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#000'
    },
    value_text: {
        fontSize: '0.8rem',
        color: '#000'
    },
    view_more: {
        fontSize: '0.8rem',
        color: '#808080'
    },
    service_type_view: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'gray',
        borderWidth: 0.8,
        padding: 2,
        height: 25,
        width: 90
    },
    service_type: {
        fontSize: '0.8rem',
        fontWeight: '400',
        color: colors.HEADER_COLOR
    },
    icon_view: {
        flex: 0.1
    }
});