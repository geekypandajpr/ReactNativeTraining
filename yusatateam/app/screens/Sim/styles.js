import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#D3D3D3',
        paddingTop: 30,
        paddingLeft:4,
        paddingRight:4

    },
    listcontainer:
    {
        flex: 1,
        margin: 5,
        marginLeft:5,
        marginRight:5,
        //borderColor: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        //borderWidth:2
    },

    secondView:
    {
        flex: 1,
        flexDirection: 'row'
    },

    secondHeads:
    {
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle:'normal'
    },

    secondAns:
    {
        fontSize: 15,
        fontStyle:'normal'
    }

})