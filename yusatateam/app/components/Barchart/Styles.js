import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container : {
        flex :1,
        flexDirection: 'row',
    },
    bar_view: {
        flex: 6.5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4
        //backgroundColor: 'red'
    },
    text1: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight:10,
        fontSize: '0.7rem'
    },
    text2: {
        paddingLeft: 10,
        color: 'gray',
        fontSize: '0.5rem'
    },
    right_view: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        elevation: 1,
        backgroundColor: '#fff'
    }
});
