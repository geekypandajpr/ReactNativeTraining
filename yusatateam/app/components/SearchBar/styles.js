import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        height: 50,
        backgroundColor : '#efefef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search_view: {
        width: '98%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 2,
        flexDirection: 'row'
    },
    icon_view: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinput_view: {
        flex: 10,
        alignItems: 'center'
    },
    text_input: {
        width: '100%',
        height: '100%',
        padding: 10
    },
})