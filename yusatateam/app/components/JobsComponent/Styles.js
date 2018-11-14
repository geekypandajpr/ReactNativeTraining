import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8
    },
    inner_container: {
        flex: 1,
        margin: 8
    },
    headerview: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
    jobNumView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    jobNumText: {
        color: '#000',
        fontWeight: '500',
        fontSize: '1rem'
    },
    jobTypeView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    jobType: {
        width: 70,
        borderRadius: 4,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jobText: {
        color: colors.HOMESCREEN.SIMCARD_COLOR,
        fontSize: '0.8rem',
        padding: 2
    },
    sub_text: {
        color: '#000',
        fontSize: '0.8rem',
        paddingTop: 2,
        paddingBottom: 2
    },
    sub_icon_text: {
        color: '#000',
        fontSize: '0.8rem',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4
    },
    sub_view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        //backgroundColor: 'green'
    }
});