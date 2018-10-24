import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container : {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner_container: {
        height: '80%',
        width: '95%',
        borderRadius: 5,
        elevation: 1
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    view2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    icon: {
        fontSize: 24,
        color: '#d9534f'
    },
    heading: {
        fontSize: '1rem',
        color: '#000',
        marginLeft: 10
    },
    text1: {
        fontSize: '0.8rem',
        color: '#000',
        marginRight: 10
    },
    text2: {
        fontSize: '0.8rem',
        color: '#000'
    }
});
