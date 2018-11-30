import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 3,
        padding: 10
    },
    sub_view: {
        flexDirection: 'row'
    },
    jobNumText: {
        fontSize: '1rem',
        color: '#000',
        fontWeight: '500'
    },
    status: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    statusView: {
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'gray',
        padding: 2,
        width: 90,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jobTypeView: {
        borderRadius: 0,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        // color: '#F98866',
        color: '#fff',
        fontSize: '0.8rem'
    },
    left_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    middle_view: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right_view: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    key_text: {
        fontSize: '0.9rem',
        color: '#000',
    },
    value_text: {
        fontSize: '0.8rem',
        color: 'gray'
    },
});
