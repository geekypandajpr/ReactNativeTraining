import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inner_container: {
        flex: 1
    },
    flex_one: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    flex_two: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    colon: {
        flex: 0.2,
        alignItems: 'center'
    },
    View_row: {
        flex: 1,
        flexDirection: 'row'
    },
    status_View:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    status: {
        borderRadius: 12,
        borderWidth: 0.8,
        borderColor: 'gray',
        padding: 2,
        width: 80,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    status_text: {
        color: '#1f667e',
        fontSize: '0.8rem'
    },
})