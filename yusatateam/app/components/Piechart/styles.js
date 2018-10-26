import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    first_view: {
        flex: 1.5,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    second_view: {
        flex: 1.5,
        //backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    square: {
        height: 10,
        width: 10
    },
    details_view: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    view1: {
        flex: 1,
        //backgroundColor: 'red'
    },
    view2: {
        flex: 4,
        //backgroundColor: 'green'
    },
    text: {
        fontSize: '0.8rem',
        color: 'gray'
    }
});