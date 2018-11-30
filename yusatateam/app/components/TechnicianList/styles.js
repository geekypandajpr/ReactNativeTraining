import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../constants/colors';
export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 3
    },
    leftView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightView: {
        flex: 4,
        margin: 6
    },
    profile_view: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#DCDCDC'
    },
    profile_pic: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    main_view: {
        flex: 1,
        flexDirection: 'row',
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    colon_view: {
        flex: 0.2,
        //backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colon: {
        fontSize: '0.8rem',
        color: 'gray'
    },
    
    view_container: {
        flex: 1,
        flexDirection: 'row'
    },
    name_text: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    jobType: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    jobTypeView: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 1,
        width: 80,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobTypeText: {
        color: '#F98866',
        fontSize: '0.7rem'
    },
    key_text: {
        color: '#000',
        fontSize: '0.9rem',
        fontWeight: '400'
    },
    value_text: {
        color: 'gray',
        fontSize: '0.8rem'
    },
    todays_job_view: {
        borderRadius: 0,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 60,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    today_job_text: {
        color: colors.HEADER_COLOR,
        fontSize: '0.8rem',
        fontWeight: '400'
    }

    
});
