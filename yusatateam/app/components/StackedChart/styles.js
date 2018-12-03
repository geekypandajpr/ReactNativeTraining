import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    Square:  {
        height: 14,
        width: 14
    },
    view1: {
        flex: 1,
        justifyContent: 'center',
    },
    view2: {
        flex: 4,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: '0.8rem',
        color: 'gray',
        fontWeight: '200',
        padding: 5,
        marginRight: 10
    },
    details_view: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },

})