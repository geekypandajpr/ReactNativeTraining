import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    first_view: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    second_view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 10
    },
    square: {
        height: 14,
        width: 14
    },
    details_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 3,
        paddingBottom: 3
    },
    view1: {
        flex: 0.8,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view2: {
        flex: 4,
        flexDirection:'row',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: '0.8rem',
        color: 'rgba(0,0,0,0.5)'
    }
});