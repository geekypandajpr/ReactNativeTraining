import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
        marginTop: 30,

    },
    listcontainer:
    {
        flex: 1,
        margin: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth:2
    },

    secondView:
    {
        flex: 1,
        flexDirection: 'row'
    },

    secondHeads:
    {
        fontWeight: 'bold',
        fontSize: 17,
        fontStyle:'normal'
    },

    secondAns:
    {
        fontSize: 17,
        fontStyle:'normal'
    }

})