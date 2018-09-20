import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: { 
        flex : 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#57596E',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    first_child: {
        flex: 1,
        justifyContent: 'center',
        margin: 10
    },
    second_child: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text1: {
        color: '#fff',
        fontSize: '1rem',
    },
    text2: {
        color: '#ffffff50',
        fontSize: '0.6rem',
    },
    text3: {
        color: '#fd9a61',
        fontSize: '0.8rem',
    }
});