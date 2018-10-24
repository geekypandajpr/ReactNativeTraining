import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    first_view: {
        flex: 2,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    second_view: {
        flex: 1,
        //backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        margin: 4
    },
    view2: {
        flex: 4,
        margin: 4
    }
});