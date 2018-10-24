import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2

    },
    Button_Style:
    {
        height: 70,
        width: 120,
        borderRadius: 10
    },
    upper:
    {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower:
    {
        flex: 1,
        alignItems: 'center'
    },

    Text_Style: {
        fontStyle: 'normal',
        fontSize: '1rem'
    }
})