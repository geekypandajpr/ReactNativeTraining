import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container : {
        flex :1,
        flexDirection: 'row',
    },
    bar_view: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});
